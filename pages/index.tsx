import Head from "next/head";
import Link from "next/link";
import { FormEvent, useRef, } from "react";
import { Container } from "../styles/Home";

export default function Home() {
  const ref = useRef<HTMLInputElement>(null);
  async function apiHandler(user:string){
    const request = await fetch(`https://api.github.com/users/${user}/repos`); 
    const response = await request.json();
    return response;
  }

  function submitHandler(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    console.log(apiHandler(ref.current?.value || ""));
  }

  return (
    <>
      <Head>
        <title>Search App</title>
        <meta name="description" content="Github search app" />
        <link rel = "icon" type = "image/png" href = "/logo.svg" />
      </Head>
      <Container>
        <div className="logo">
        Git search
        </div>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Search for any github profile" ref={ref}/>
          <button type="submit">Search</button>
        </form>
        <footer><Link href="/">Developed by João ©</Link></footer>
      </Container>
    </>
  );
}
