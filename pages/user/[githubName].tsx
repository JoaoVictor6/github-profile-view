import { useEffect } from "react";
import Menu from "../../src/components/Menu";
import FabScrollTop from "../../src/components/FabScrollTop";
import SearchInput from "../../src/components/SearchInput";
import Card from "../../src/components/Card";
import { Container } from "../../styles/user/style";
import { useRouter } from "next/router";
import { apiSearch } from "../../src/services/github";
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { UserPropsSSR } from "../../src/interfaces/User";
import { HeadElement } from "../../src/components/HeadElement";

export async function getServerSideProps(ctx:GetServerSidePropsContext<{
  githubName: string
}>){
  const errorMessage = (message = "User Not Found") => ({
    props: {
      error: {
        message
      }
    }
  });
  if(!ctx.params)return errorMessage();
  const { githubName } = ctx.params;

  const userInfo = await apiSearch(githubName as string);
  if(!userInfo)return errorMessage();

  const { 
    avatar_url, 
    bio, 
    followers, 
    following, 
    html_url, 
    login, 
    name,
    repo
  } = userInfo;

  return {
    props: {
      userInfo: {
        avatar_url, 
        bio, 
        followers, 
        following, 
        html_url, 
        login, 
        name          
      },
      repo,
      error: {
        message: ""
      }
    }
  };
}

function User({error, repo, userInfo: userData}: InferGetServerSidePropsType<GetServerSideProps<UserPropsSSR>>){
  const router = useRouter();
  useEffect(() => {
    if(error.message === ""){
      router.push("/404/");
    }
  },[router]);
  
  return(
    <>
      {userData && (
        <>
          <HeadElement 
            title={`${userData.name} - Github profile`}
            description={userData.bio}
            url={`/user/${userData.login}`}
            imgUrl={userData.avatar_url}
          />
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
              {repo.length >= 0 && repo.map((repoInfo, index) => (
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
      )}
    </>
  );
}

export default User;