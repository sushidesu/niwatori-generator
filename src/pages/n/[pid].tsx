import React from "react"
import { GetServerSideProps } from "next"
import Link from "next/link"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { pid } = context.query;
  return { props: { pid } }
}

const Result = ({ pid }: { pid: string}) => {
  const imageUrl = `https://storage.googleapis.com/niwatori-generator.appspot.com/ogp/${pid}`

  return (
    <div>
      <img src={imageUrl} />
      <Link href="/">Home</Link>
    </div>
  )
}

export default Result
