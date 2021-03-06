import Link from "next/link";
import {useRouter} from "next/router";
import { FormEvent, useRef, useState, } from "react";
import { HeadElement } from "../src/components/HeadElement";
import { Spinner } from "../src/components/Spinner";
import { Container } from "../styles/Home";

export default function Home() {
  const ref = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const route = useRouter();
  function submitHandler(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const name = ref.current?.value || "" ;
    if(name === "")return;
    setIsLoading(true);
    route.push(`/user/${name}`);
  }

  return (
    <>
      <HeadElement 
        title="Search App"
        description="Github search app"
        imgUrl="https://i.ibb.co/XyrXq2X/thumb-Card.png"
        url="/"
      />
      <Container>
        <div className="logo">
        Git search
        </div>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Search for any github profile" ref={ref}/>
          <button type="submit">
            {isLoading ? (
              <Spinner />
            ) : (
              "Search"
            )}
          </button>
        </form>
        <footer><Link href="/">Developed by João ©</Link></footer>
      </Container>
    </>
  );
}
