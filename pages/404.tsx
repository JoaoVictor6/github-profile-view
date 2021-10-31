import Head from "next/head";
import SearchInput from "../src/components/SearchInput";
import { Container } from "../styles/404";
export default function custom404(){
  return(
    <>
      <Head>
        <title>User not found</title>
      </Head>
      <Container>
        <SearchInput />
        <div>
          <section className="message">
            <hgroup className="error-code">
              404
            </hgroup>
            <div className="message-user">
              Page not found
            </div>
          </section>
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22">
              <path stroke="current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.75 11h16.5M6.417 14.667L2.75 11l3.667 3.667zM2.75 11l3.667-3.667L2.75 11z"/>
            </svg>
            Go to home
          </a>
        </div>
      </Container>
    </>
  );
}