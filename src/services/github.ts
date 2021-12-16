import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com"
});
type configSearch = {
  repos: boolean
}
export async function apiSearch<T>(user: string, config?: configSearch): Promise<T | null> {
  try {
    if(config?.repos){
      const response  = await api.get<T>(`/users/${user}/repos`);
      return response.data as T;
    }
    const response  = await api.get<T>(`/users/${user}`);
    return response.data as T;
  } catch(err) {
    return null;
  }
}