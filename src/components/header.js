import React from "react"
import styled from "styled-components"

import media from "utils/media"

import Navbar from "./navbar"

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  background-image: url("/grain.svg");
  background-size: 40px;
  background-repeat: repeat;
`

const Section = styled.section`
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.xl`
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
  `}

  h3 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.darkCyan};
    margin-top: 5rem;

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

const Header = ({ title, date }) => {
  return (
    <Wrap>
      <Section>
        <Navbar />
        <h3>{title}</h3>
        {date && <p>{date}</p>}
      </Section>
    </Wrap>
  )
}

export default Header
