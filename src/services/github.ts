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

type ApiResponse<T> = T | { message: string }

type ApiSearchReturn = { 
  success: boolean,
  payload?: UserInfo,
  error?: {
    message: unknown,
    notFound?: boolean
  }
}

export async function apiSearch(user: string):Promise<ApiSearchReturn> {
  try {
    const userResponse = (await api.get<ApiResponse<UserInfo>>(`/users/${user}`)).data;
    const repoResponse  = (await api.get<Repositories[] | { message: string }>(`/users/${user}/repos`)).data;
    if((userResponse.message === "Not Found")) {
      return {
        success: false,
        error: {
          message: "user not found",
          notFound: true
        },
      };
    }

    const {
      avatar_url, 
      bio, 
      followers, 
      following, 
      html_url, 
      login, 
      name
    } = userResponse as UserInfo;
    return {
      success: true,
      payload: {
        avatar_url, 
        bio, 
        followers, 
        following, 
        html_url, 
        login, 
        name
        , 
        repo: (repoResponse as Repositories[]).map(({name, description, fork, html_url, language, stargazers_count}) => ({
          name, 
          description, 
          fork, 
          html_url, 
          language, 
          stargazers_count
        }))
      }
    };
    
  } catch(err) {
    return {
      success: false,
      error: {
        notFound: true,
        message: err
      }
    };
  }
}