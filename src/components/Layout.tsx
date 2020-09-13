import React from "react"
import Link from "next/link"
import styled from "@emotion/styled"

export const Layout: React.FC = ({ children }) => (
  <Wrapper>
    <Header><Link href="/">庭には2羽ニワトリがいるジェネレーター</Link></Header>
    <main>{ children }</main>
    <Footer>
      <p>This site uses <a href="https://twemoji.twitter.com" target="_blank" rel="noopener noreferrer">Twemoji</a></p>
      © sushidesu
    </Footer>
  </Wrapper>
)


const Wrapper = styled.div`
  max-width: 600px;
  margin: .6em;
  box-shadow: 2px 3px 30px 0px rgb(206 218 230 / 75%);
  padding: 6px;
`

const Header = styled.header`
  & > a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
    font-size: 28px;
  }
`

const Footer = styled.footer``
