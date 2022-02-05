export type errorProps = {
  message: string
}
export type UserInfo = {
  avatar_url: string
  bio: string
  followers: string
  following: string
  html_url: string
  login: string
  name: string
}

export type UserPropsSSR = {
  userInfo: UserInfo,
  repo: {
    name: string
    description: string
    fork: boolean
    html_url: string
    language: string
    stargazers_count: number
  }[],
  error: errorProps
}