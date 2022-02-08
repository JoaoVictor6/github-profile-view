import Menu from "../../src/components/Menu";
import FabScrollTop from "../../src/components/FabScrollTop";
import SearchInput from "../../src/components/SearchInput";
import Card from "../../src/components/Card";
import { Container } from "../../styles/user/style";
import { apiSearch } from "../../src/services/github";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { UserPropsSSR } from "../../src/interfaces/User";
import { HeadElement } from "../../src/components/HeadElement";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if(!ctx.params)return {
    redirect: {
      destination: "/",
      permanent: false
    }
  };
  const { githubName } = ctx.params as { githubName: string };

  const userInfo = await apiSearch(githubName);
  if(!userInfo.success && !userInfo.notFound)return {
    notFound: true
  };
  else if (!userInfo.success) return {
    redirect: {
      destination: "/500",
      permanent: false
    }
  };

  const { 
    avatar_url, 
    bio, 
    followers, 
    following, 
    html_url, 
    login, 
    name,
    repo
  } = userInfo.payload;

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
    }
  };
};

function User({repo, userInfo: userData}: InferGetServerSidePropsType<GetServerSideProps<UserPropsSSR>>){
  
  return(
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
  );
}

export default User;