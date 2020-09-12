import React, { useRef }  from "react"
import domToImage from "dom-to-image"

const Home = () => {
  const previewRef = useRef<HTMLDivElement>(null)

  const generate = async () => {
    const dataUrl = await domToImage.toPng(previewRef.current)
    const img = new Image()
    img.src = dataUrl

    document.body.appendChild(img)
  }

  return (
    <div>
      <h1>庭には2羽ニワトリがいるジェネレーター</h1>
      <div style={{ width: "200px", height: "200px", backgroundColor: "white" }} ref={previewRef}>
        <p>this is preview</p>
        <p><b>niwatori</b></p>
        <p style={{ color: "red" }}>niwatori</p>
      </div>
      <button onClick={generate}>start</button>
    </div>
  )
}

export default Home
