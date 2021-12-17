import Head from "next/head";
import { useEffect, useState } from "react";
import Menu from "../../src/components/Menu";
import FabScrollTop from "../../src/components/FabScrollTop";
import { Container } from "../../styles/user/style";
import Card from "../../src/components/Card";
import { useRouter } from "next/router";
import SearchInput from "../../src/components/SearchInput";
import { apiSearch } from "../../src/services/github";
import useSWR from "swr";

export default function User(){
  const router = useRouter();
  const userFetcher = async (user:string) => (await apiSearch(user));
  
  const [githubName, setGithubName] = useState(router.query.githubName as string);
  const {data:userData} = useSWR(githubName, userFetcher);
  async function notFound(){
    await router.push("/404/");
  }

  useEffect(() => {
    if(userData === null)notFound();
  }, [userData]);

  useEffect(() => {
    if (router.query.githubName) {
      setGithubName(router.query.githubName as string);
    }
  }, [router]);
  
  return(
    <>
      {
        userData && (
          <>
            <Head>
              <title>{userData.name+" - "}Github profile</title>
              <meta name="description" content="Github user profile" />
              <meta property="og:image" content={userData.avatar_url} />
            </Head>
            <Container>
              <FabScrollTop />
              <SearchInput />
              <Menu
                avatar_url={userData.avatar_url}
                bio={userData.bio}
                followers={userData.followers}
                following={userData.following}
                html_url={userData.html_url}
                login={userData.login}
                name={userData.name}
              />
              <div className="repos">
                {userData.repo.length >= 0 && userData.repo.map((repoInfo, index) => (
                  <Card 
                    key={`repo_id${index+66}`}
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
        )
      }
    </>
  );
}