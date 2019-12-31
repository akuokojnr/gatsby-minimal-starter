import React from "react"
import styled from "styled-components"

import media from "utils/media"

import Navbar from "./navbar"

import { ReactComponent as Wreath } from "images/wreath.svg"

const Wrap = styled.div``

const Section = styled.section`
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: -100px;

  ${media.xl`
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto -100px auto;
  `}

  h3 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.darkCyan};
    margin: 5rem 2rem 0 2rem;
    text-align: center;

    ${media.sm`
      font-size: 2.8rem;
      margin-top: 0;
    `}
  }

  p {
    font-size: 1.2rem;
    font-family: "Source Sans Pro";
    margin-top: 20px;
  }
`
const WreathIcon = styled(Wreath)`
  width: 60px;

  g {
    fill: #000;
  }
`

const Header = ({ title, date }) => {
  return (
    <Wrap>
      <Section>
        <Navbar />
        <h3>{title}</h3>
        {date && <p>{date}</p>}
        <WreathIcon />
      </Section>
    </Wrap>
  )
}

export default Header
