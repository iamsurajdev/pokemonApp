import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Pokemon App</title>
        <meta name="description" content="App for information about Pokemon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Pokemon</h1>
      </main>
    </div>
  );
}
