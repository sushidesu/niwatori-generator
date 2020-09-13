import React, { useState, useRef }  from "react"
import { useRouter } from "next/router"
import domToImage from "dom-to-image"
import { storage } from "../plugins/Firebase"
import { generateRandomId } from "../utils"
import { NiwatoriPreview } from "../components/NiwatoriPreview"

const Home = () => {
  const router = useRouter()
  const previewRef = useRef<HTMLDivElement>(null)
  const [text, setText] = useState("にわとり")

  const generate = async () => {
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

  return (
    <div>
      <h1>庭には2羽ニワトリがいるジェネレーター</h1>
      <NiwatoriPreview ref={previewRef} />
      <hr />
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={generate}>start</button>
    </div>
  )
}

export default Home
