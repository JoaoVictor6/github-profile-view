import Head from "next/head";

type HeadElementProps = {
  title: string
  description: string
  url: string
  imgUrl: string
}

export function HeadElement({ title, description, url, imgUrl }:HeadElementProps){
  return(
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content="GIthub user preview" />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgUrl} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content="Github user preview" />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imgUrl} />

    </Head>
  );
}