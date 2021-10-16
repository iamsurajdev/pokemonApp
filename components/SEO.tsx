import Head from "next/head";

const SEO: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://pokemonwiki.vercel.app/" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
