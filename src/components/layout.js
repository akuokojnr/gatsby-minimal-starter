import React from "react"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"

import theme from "utils/theme"
import media from "utils/media"

import Header from "./header"
import Subscribe from "./subscribe"

const Main = styled.main`
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  width: 100%;
  padding: 3rem 2rem 0 2rem;

  span:last-child {
    font-style: italic;
    font-family: "Source Sans Pro";
    font-size: 0.8rem;
  }

  ${media.sm`
    padding: 2rem 4rem;
  `}

  ${media.xl`
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
  `}
`
const Footer = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  border-top: 1.1px solid ${({ theme }) => theme.colors.gray};
  padding: 40px 30px;
  margin: 100px -30px 0 -30px;

  ${media.md`
    flex-direction: row;
  `}
`
const Top = styled.div`
  font-style: italic;
  font-family: "Source Sans Pro";
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.black};

  p {
    font-style: normal;
    font-size: 1.3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
  }

  div {
    span {
      margin-bottom: 30px !important;
    }
  }

  a {
    font-style: normal;
    font-size: 1.3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 300;

    &:hover {
      color: ${({ theme }) => theme.colors.darkCyan};
    }
  }

  a + a {
    margin-left: 10px;
  }
`

const Layout = ({ children, title, date }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header title={title} date={date} />
        <Main>
          {children}

          <Footer>
            <Top>
              <div>
                <p>Keep in touch: </p>

                <span>
                  <a
                    href="https://twitter.com/_akuokojnr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://www.instagram.com/akuokojnr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </span>
              </div>
            </Top>

            <Subscribe />
          </Footer>

          <span>
            Copyright ©{new Date().getFullYear()}. All rights reserved. Carpe
            Diem!
          </span>
        </Main>
      </div>
    </ThemeProvider>
  )
}

export default Layout
