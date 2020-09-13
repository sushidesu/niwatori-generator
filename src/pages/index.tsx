import React, { useState, useCallback, useRef, useEffect }  from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import domToImage from "dom-to-image"
import { useForm, SubmitHandler } from "react-hook-form"
import styled from "@emotion/styled"
import { storage } from "../plugins/Firebase"
import { generateRandomId } from "../utils"
import { Layout } from "../components/Layout"
import { NiwatoriPreview } from "../components/NiwatoriPreview"
import { NiwatoriEditor } from "../components/NiwatoriEditor"
import { Divider } from "../components/Divider"

const Home = () => {
  const router = useRouter()
  const previewRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false)
  const { watch, register, setValue,  handleSubmit } = useForm<Niwatori>({
    defaultValues: {
      place: "庭",
      count: "2",
      unit: "羽",
      emoji: "🐓",
      niwatori: "ニワトリ",
      whatHappened: "いる",
    }
  })

  const setEmoji = useCallback((emoji: string) => setValue("emoji", emoji), [])

  useEffect(() => {
    register("emoji")
  }, [])

  const submit: SubmitHandler<Niwatori> = (data, event) => {
    event.preventDefault()
    // console.log(data)
    if (!loading) {
      generate()
    }
  }

  const generate = async () => {
    setLoading(true)
    const id = generateRandomId()

    const dataUrl = await domToImage.toPng(previewRef.current)
    const img = new Image()
    img.src = dataUrl

    img.onload = () => {
      const canvas = document.createElement("canvas")
      canvas.width = previewRef.current.offsetWidth * 2
      canvas.height = previewRef.current.offsetHeight * 2
      const ctx = canvas.getContext("2d")
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      canvas.toBlob(async (blob) => {
        await storage.ref(`ogp/${id}`).put(blob)
        router.push(`/n/${id}`)
      })
    }
  }

  const pageUrl = `https://niwatori-generator.dayo.app/`
  const TITLE = "庭には2羽ニワトリがいるジェネレーター"
  const DESCRIPTION = "ほんわかニワトリ画像を作成します"
  const imageUrl = "/static/niwatori.png"

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
        <meta
          name="twitter:image"
          content={imageUrl}
        />
      </Head>
      <Title>プレビュー</Title>
      <NiwatoriPreview niwatori={watch()} ref={previewRef} />
      <Divider />
      <NiwatoriEditor
        loading={loading}
        register={register}
        onSubmit={handleSubmit(submit)}
        onEmojiClick={setEmoji}
        emoji={watch("emoji")}
      />
    </Layout>
  )
}

const Title = styled.h2`
  font-size: 1em;
  margin-top: 1.2em;
`

export default Home
