import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import media from "utils/media"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1.3rem 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;

  ${media.md`
    flex-direction: row;
  `}

  ${media.xl`
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
  `}

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 1rem;
    margin-left: 0;

    ${media.md`
      margin-top: 0;
      margin-left: auto;
      width: auto;
    `}
  }

  li {
    list-style-type: none;

    .active-page {
      font-weight: bold;
    }
  }

  li + li {
    margin: 0 2rem;
  }

  a {
    text-decoration: none;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 300;
    font-family: "Source Sans Pro";

    :hover {
      font-weight: bold;
    }
  }
`
const Brand = styled(Link)`
  font-weight: 700;
  font-size: 1.5rem !important;
  text-transform: uppercase;
  font-family: "DM Serif Display" !important;
  font-weight: 400 !important;
`

const Navbar = () => {
  return (
    <Nav>
      <Brand to="/">Akuoko Daniel Jnr</Brand>

      <ul>
        <li>
          <Link to="/" activeClassName="active-page">
            Articles
          </Link>
        </li>
        <li>
          <Link to="/books/" activeClassName="active-page">
            Books
          </Link>
        </li>
      </ul>
    </Nav>
  )
}

export default Navbar
