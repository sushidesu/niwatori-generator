import Head from "next/head"
import '../../styles/globals.css'
import "emoji-mart/css/emoji-mart.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffdd3f" />
        <meta name="msapplication-TileColor" content="#ffdd3f" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
