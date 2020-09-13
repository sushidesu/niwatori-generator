import React, { forwardRef, ForwardRefRenderFunction } from "react"
import styled from "@emotion/styled"
import Twemoji from "react-twemoji"

type Props = {
  niwatori: Niwatori
}

const WithoutRefNiwatoriPreview: ForwardRefRenderFunction<HTMLDivElement, Props> = ({ niwatori }, ref) => {
  const count = parseInt(niwatori.count) || 0

  return (
    <Container>
      <Wrapper ref={ref}>
        <Place>
          <span>{ niwatori.place }</span>
          <NiwatoriWrapper>
            {Array.from({ length: count > 30 ? 30 : count }).map((_, index) => (
              <Niwatori key={index}>
                <span>{ niwatori.niwatori }</span>
                <Twemoji>{ niwatori.emoji }</Twemoji>
              </Niwatori>
            ))}
          </NiwatoriWrapper>
        </Place>
        <WhatHappened>{ niwatori.whatHappened }</WhatHappened>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  margin: auto;
  width: fit-content;
`

const Wrapper = styled.div`
  width: 300px;
  height: 157px;
  padding: .3em .8em;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Place = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
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
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 8px;
`

const Niwatori = styled.div`
  margin: 0 .3em 0 0;
  position: relative;
  display: flex;
  flex-direction: column;
  & img {
    width: 32px;
  }
  & > span {
    font-size: .5em;
    text-align: right;
  }
`

const WhatHappened = styled.p`
  width: 96%;
  text-align: right;
  font-weight: bold;
  font-size: 1em;
`

export const NiwatoriPreview = forwardRef(WithoutRefNiwatoriPreview)
