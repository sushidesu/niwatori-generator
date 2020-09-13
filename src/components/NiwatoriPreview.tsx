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
            <span>{ niwatori.niwatori }</span>
          </Niwatori>
        ))}
      </NiwatoriWrapper>
    </Place>
    <WhatHappened>{ niwatori.whatHappened }</WhatHappened>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 300px;
  height: 157px;
  padding: .8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Place = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  border-radius: 6px;
  border: 2px solid #555;
  & > span {
    position: absolute;
    display: inline-block;
    top: -1em;
    left: 1em;
    padding: 4px 8px;
    background-color: white;
    font-size: .7em;
  }
`

const NiwatoriWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Niwatori = styled.div`
  margin: .3em;
  position: relative;
  & img {
    width: 36px;
  }
  & > span {
    position: absolute;
    top: -0.8em;
    right: 0;
    font-size: .5em;
    text-align: right;
    transform: translateY(-60%);
  }
`

const WhatHappened = styled.p`
  width: 96%;
  text-align: right;
  font-weight: bold;
  font-size: 1em;
`

export const NiwatoriPreview = forwardRef(WithoutRefNiwatoriPreview)
