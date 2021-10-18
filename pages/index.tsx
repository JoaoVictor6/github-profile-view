import Head from 'next/head'
import Link from 'next/link'
import { FormEvent, useRef } from 'react'
import { Container } from '../styles/Home'

export default function Home() {
  const ref = useRef(null)
  function submitHandler(event:FormEvent<HTMLFormElement>){
    event.preventDefault()
  }
  return (
    <>
    <Head>
      <title>Search App</title>
      <meta name="description" content="Github search app" />
    </Head>
    <Container>
      <div className="logo">
        Git search
      </div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Search for any github profile" ref={ref}/>
        <button type="submit">Search</button>
      </form>
      <footer><Link href="/">Developed by João</Link></footer>
    </Container>
    </>
  )
}
