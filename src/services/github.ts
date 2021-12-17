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
    const userResponse  = (await api.get<UserInfo>(`/users/${user}`)).data;
    
    return {...userResponse, repo: repoResponse};
    
  } catch(err) {
    return null;
  }
}