import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { Container } from "./style";

export default function SearchInput(){
  const [username, setUsername] = useState("");
  const router = useRouter();
  function onSubmitHandler(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    username && router.push(`/user/${username}`);
  }
  return (
    <Container onSubmit={onSubmitHandler}>
      <input 
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Search for any github user"
      />
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
          <path fill="#E5E5E5" fillRule="evenodd" d="M10 5a5 5 0 100 10 5 5 0 000-10zm-7.5 5a7.5 7.5 0 1113.613 4.345l6.02 6.021a1.25 1.25 0 01-1.767 1.768l-6.02-6.02A7.499 7.499 0 012.5 10z" clipRule="evenodd"/>
        </svg>
      </button>
    </Container>
  );
}