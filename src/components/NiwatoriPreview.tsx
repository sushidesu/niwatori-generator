import React, { forwardRef, ForwardRefRenderFunction } from "react"
import styled from "@emotion/styled"
import Twemoji from "react-twemoji"

type Props = {
  niwatori: Niwatori
}

const WithoutRefNiwatoriPreview: ForwardRefRenderFunction<HTMLDivElement, Props> = ({ niwatori }, ref) => (
  <Wrapper ref={ref}>
    <Place>
      <span>{ niwatori.place }</span>
      <NiwatoriWrapper>
        {Array.from({ length: parseInt(niwatori.count) || 0 }).map((_, index) => (
          <Niwatori key={index}>
            <Twemoji>{ niwatori.emoji }</Twemoji>
            { niwatori.niwatori }
          </Niwatori>
        ))}
      </NiwatoriWrapper>
    </Place>
    <WhatHappened>{ niwatori.whatHappened }</WhatHappened>
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
    font-size: 1.4em;
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
  text-align: right;
  font-weight: bold;
  font-size: 2em;
`

export const NiwatoriPreview = forwardRef(WithoutRefNiwatoriPreview)
