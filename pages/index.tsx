import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";
import { FormEvent, useRef, } from "react";
import { HeadElement } from "../src/components/HeadElement";
import { Container } from "../styles/Home";
import thumb from "../public/ThumbCard.png";

export default function Home() {
  const ref = useRef<HTMLInputElement>(null);
  const route = useRouter();
  function submitHandler(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const name = ref.current?.value || "" ;
    route.push(`/user/${name}`);
  }

  return (
    <>
      <HeadElement 
        title="Search App"
        description="Github search app"
        imgUrl={thumb.src}
        url="/"
      />
      <Head>
        <title></title>
        <meta name="description" content="" />
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
