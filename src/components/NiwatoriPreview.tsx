import React, { forwardRef, ForwardRefRenderFunction } from "react"
import styled from "@emotion/styled"

const place = "庭"
const niwatori = "ニワトリ"
const count = 2
const verv = "いる"

const WithoutRefNiwatoriPreview: ForwardRefRenderFunction<HTMLDivElement> = ({ children }, ref) => (
  <Wrapper ref={ref}>
    <Place>
      <span>{ place }</span>
      <NiwatoriWrapper>
        {Array.from({ length: count }).map((_, index) => (
          <Niwatori key={index}>{ niwatori }</Niwatori>
        ))}
      </NiwatoriWrapper>
    </Place>
        <WhatHappened>{ verv }</WhatHappened>
  </Wrapper>
)

const Wrapper = styled.div`
  border: 1px solid #000;
  width: 600px;
  height: 315px;
  padding: 1.6em;
`

const Place = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  margin: auto;
  border-radius: 6px;
  border: 2px solid #555;
  & > span {
    position: absolute;
    display: inline-block;
    top: -1em;
    left: 1em;
    padding: 4px 8px;
    background-color: white;
  }
`

const NiwatoriWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Niwatori = styled.div`
  width: 90px;
  height: 40px;
  border: 1px solid #000;
  margin: .1em;
`

const WhatHappened = styled.p`
  color: blue;
`

export const NiwatoriPreview = forwardRef(WithoutRefNiwatoriPreview)
