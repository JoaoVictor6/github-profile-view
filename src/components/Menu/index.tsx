import { useEffect, useState } from "react";
import { Bold, Container, Tabs } from "./style";

interface MenuProps {
  avatar_url: string
  html_url: string
  name: string
  login: string
  followers: string
  following: string
  bio: string
}

export default function Menu({
  avatar_url,
  name, login,
  bio,
  followers,
  following,
  html_url
}: MenuProps){

  return(
    <Container>
      <div className="user-data">
        <img src={avatar_url} alt="User picture" />
        <section>
          <h1>
            <a href={html_url} target="_blank" rel="noreferrer">
              {name}
              <span>{login}</span>
            </a>
          </h1>
          <div className="description">
            {bio}
          </div>
          <div className="media-infos">
            <div className="follow-info">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                <path fill="#6A737D" fillRule="evenodd" d="M11 7a4 4 0 100 8 4 4 0 000-8zm-7 4a7 7 0 1111.796 5.098 11.013 11.013 0 016.068 8.168 1.503 1.503 0 01-1.247 1.717 1.501 1.501 0 01-1.717-1.247 8.002 8.002 0 00-15.8 0 1.501 1.501 0 01-2.964-.472A11.014 11.014 0 016.204 16.1 6.98 6.98 0 014 11zm18-3a1.5 1.5 0 100 3 3 3 0 011.332 5.688 1.5 1.5 0 00-.832 1.344v.704a1.5 1.5 0 001.148 1.46c2.4.578 4.324 2.4 5.044 4.744a1.5 1.5 0 102.868-.88 10.02 10.02 0 00-5.12-6.024A6 6 0 0022 8z" clipRule="evenodd"/>
              </svg>
              <span>
                <Bold>{followers}</Bold> followers · <Bold>{following}</Bold> following 
              </span>
            </div>
          </div>
        </section>
      </div>
      <Tabs>
        <button>Repositories</button>
      </Tabs>
    </Container>
  );
}
