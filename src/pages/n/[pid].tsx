import React from "react"
import { GetServerSideProps } from "next"
import Head from "next/head"
import Link from "next/link"
import { Layout } from "../../components/Layout"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { pid } = context.query;
  return { props: { pid } }
}

const Result = ({ pid }: { pid: string}) => {
  const pageUrl = `https://niwatori-generator.vercel.app/n/${pid}`
  const imageUrl = `https://storage.googleapis.com/niwatori-generator.appspot.com/ogp/${pid}`
  const TITLE = "庭には2羽ニワトリがいるジェネレーター"
  const DESCRIPTION = "ほんわかニワトリ画像を作成します"

  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta
          name="description"
          content={DESCRIPTION}
        />
        <meta
          property="og:title"
          content={TITLE}
        />
        <meta
          property="og:image"
          content={imageUrl}
        />
        <meta
          property="og:url"
          content={pageUrl}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={DESCRIPTION}
        />

        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta
          name="twitter:description"
          content={DESCRIPTION}
        /> */}
        <meta
          name="twitter:image"
          content={imageUrl}
        />
      </Head>
      <img src={imageUrl} />
      <Link href="/">Home</Link>
    </Layout>
  )
}

export default Result
