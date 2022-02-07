import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com"
});

interface Repositories {
  name: string
  html_url: string
  fork: boolean
  language: string
  stargazers_count: number
  description: string
}
interface UserInfo {
  avatar_url: string
  html_url: string
  name: string
  login: string
  followers: string
  following: string
  bio: string
  message?: string
  repo: Repositories[]
}

export async function apiSearch(user: string): Promise<UserInfo | null> {
  
  try {
    const repoResponse  = (await api.get<Repositories[]>(`/users/${user}/repos`)).data;
    const {
      avatar_url, 
      bio, 
      followers, 
      following, 
      html_url, 
      login, 
      name
    } = (await api.get<UserInfo>(`/users/${user}`)).data;
    console.log(repoResponse);
    return {
      avatar_url, 
      bio, 
      followers, 
      following, 
      html_url, 
      login, 
      name
      , 
      repo: repoResponse.map(({name, description, fork, html_url, language, stargazers_count}) => ({
        name, 
        description, 
        fork, 
        html_url, 
        language, 
        stargazers_count
      }))
    };
    
  } catch(err) {
    return null;
  }
}