import React, { useCallback, useRef, useEffect }  from "react"
import { useRouter } from "next/router"
import domToImage from "dom-to-image"
import { useForm, SubmitHandler } from "react-hook-form"
import { storage } from "../plugins/Firebase"
import { generateRandomId } from "../utils"
import { NiwatoriPreview } from "../components/NiwatoriPreview"
import { NiwatoriEditor } from "../components/NiwatoriEditor"

const Home = () => {
  const router = useRouter()
  const previewRef = useRef<HTMLDivElement>(null)

  const { watch, register, setValue,  handleSubmit } = useForm<Niwatori>({
    defaultValues: {
      place: "庭",
      count: "2",
      unit: "羽",
      emoji: "🐔",
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
    console.log(data)
    // generate()
  }

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
      <NiwatoriPreview niwatori={watch()} ref={previewRef} />
      <hr />
      <NiwatoriEditor
        register={register}
        onSubmit={handleSubmit(submit)}
        onEmojiClick={setEmoji}
      />
    </div>
  )
}

export default Home
