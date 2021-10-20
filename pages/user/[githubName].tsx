import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Menu from "../../src/components/Menu";
import { Container } from "../../styles/user/style";
interface UserInfoProps {
  avatar_url: string
  html_url: string
  name: string
  login: string
  followers: string
  following: string
  bio: string
}

export default function User(){
  const router = useRouter();
  const {githubName} = router.query;
  const [userInfo, setUserInfo] = useState({} as UserInfoProps);

  useEffect(() => {
    async function apiUserInfo(user:string){
      const request = await fetch(`https://api.github.com/users/${user}`); 
      const response = await request.json() as UserInfoProps;
      
      return response;
    }
    apiUserInfo(githubName as string)
      .then(res => {
        setUserInfo({...res as UserInfoProps});
      });
  }, []);
  return(
    <>
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
      </Container>
    </>
  );
}