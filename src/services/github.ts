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

export async function apiSearch(user: string): Promise<{ success: true, payload: UserInfo } | { success: false, error: string, notFound?: true }> {
  try {
    const userResponse = (await api.get<UserInfo | { message: string }>(`/users/${user}`)).data;
    const repoResponse  = (await api.get<Repositories[] | { message: string }>(`/users/${user}/repos`)).data;
    if((!!userResponse.message && userResponse.message === "Not Found") 
      // eslint-disable-next-line
      //@ts-ignore: Erro do ts de que message não existe no tipo Repositories[] | { message: string } ??? Mas deve funcionar sem pb
      || (!!repoResponse.message && repoResponse.message === "Not Found")) {
      return {
        success: false,
        error: "User not found",
        notFound: true
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
      error: err as string
    };
  }
}