import { Container, Content } from "./style";

interface UserRepoProps {
  name: string
  html_url: string
  fork: boolean
  language: string
  stargazers_count: number
  description: string
}

export default function Card({ name, html_url, fork, language, stargazers_count, description}: UserRepoProps){

  return (
    <Container>
      <a href={html_url} target="_blank" rel="noreferrer">
        <Content>
          <hgroup>
            <div className="name">
              {name}
              {fork && (
                <span>(fork)</span>
              )}
            </div>
            <div className="repo-info">
              <div>{language}</div>
              <div className="stars">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
                  <path fill="#6A737D" fillRule="evenodd" d="M9 .281a.844.844 0 01.757.47l2.117 4.292 4.737.689a.844.844 0 01.468 1.439l-3.427 3.341.809 4.716a.843.843 0 01-1.224.89L9 13.89l-4.237 2.228a.845.845 0 01-1.224-.889l.81-4.718L.92 7.17a.844.844 0 01.468-1.44l4.737-.688L8.243.751A.844.844 0 019 .282zm0 2.75L7.442 6.188a.844.844 0 01-.635.462l-3.484.506 2.52 2.457a.844.844 0 01.243.747l-.594 3.47 3.115-1.639a.843.843 0 01.786 0l3.116 1.639-.596-3.47a.843.843 0 01.243-.747l2.52-2.456-3.483-.506a.844.844 0 01-.635-.461L9 3.03z" clipRule="evenodd"/>
                </svg>
                {stargazers_count}
              </div>
            </div>
          </hgroup>
          <div className="description">
            {description}
          </div>
        </Content>
      </a>
    </Container>
  );
}