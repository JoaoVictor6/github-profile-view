import Head from "next/head";
import { useEffect, useState } from "react";
import Menu from "../../src/components/Menu";
import FabScrollTop from "../../src/components/FabScrollTop";
import { Container } from "../../styles/user/style";
import Card from "../../src/components/Card";
import { useRouter } from "next/router";

interface UserInfoProps {
  avatar_url: string
  html_url: string
  name: string
  login: string
  followers: string
  following: string
  bio: string
}

interface UserRepoProps {
  name: string
  html_url: string
  fork: boolean
  language: string
  stargazers_count: number
  description: string
}

export default function User(){
  const router = useRouter();
  // const {} = router.query;
  const [userInfo, setUserInfo] = useState({} as UserInfoProps);
  const [userRepo, setUserRepo] = useState<UserRepoProps[]>([] as UserRepoProps[]);
  const [githubName, setGithubName] = useState(router.query.githubName as string);
  
  useEffect(() => {
    if (router && router.query) {
      console.log(router.query);
      setGithubName(router.query.githubName as string);
    }
  }, [router]);

  useEffect(() => {
    async function apiUserInfo(user:string){
      const request = await fetch(`https://api.github.com/users/${user}`); 
      const response = await request.json() as UserInfoProps;
      
      return response;
    }
    apiUserInfo(githubName)
      .then(res => {
        setUserInfo({...res as UserInfoProps});
      });

    (async () => {
      const repoResponse = await fetch(`https://api.github.com/users/${githubName}/repos`);
      repoResponse.json().then(res => {
        setUserRepo(res);  
      });
      
    })();
  }, [githubName]);

  return(
    <>
      <Head>
        <title>{userInfo.name} - Github profile</title>
        <meta name="description" content="Github user profile" />
      </Head>
      <FabScrollTop />
      <Menu
        avatar_url={userInfo.avatar_url}
        bio={userInfo.bio}
        followers={userInfo.followers}
        following={userInfo.following}
        html_url={userInfo.html_url}
        login={userInfo.login}
        name={userInfo.name}
      />
      <Container>
        <div className="repos">
          {userRepo.length >= 0 && userRepo?.map((repoInfo, index) => (
            <Card 
              key={`repo_id${index}`}
              name={repoInfo.name}
              description={repoInfo.description}
              fork={repoInfo.fork}
              html_url={repoInfo.html_url}
              language={repoInfo.language}
              stargazers_count={repoInfo.stargazers_count}
            />
          ))}
        </div>
      </Container>
    </>
  );
}