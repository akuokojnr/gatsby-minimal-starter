import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import media from "utils/media"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  ${media.md`
    flex-direction: row;
    align-items: center;
  `}

  ${media.xl`
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
  `}

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 1rem;
    margin-bottom: 0.7rem; 
    
    ${media.md`
      margin-top: 0;
      margin-left: auto;
      margin-bottom: 0;
      width: auto;

      li + li {
        margin: 0 1rem;
      }
    `};
  }

  li {
    list-style-type: none;

    .active-page {
      background: rgba(18, 79, 70, 0.2);
      color: ${({ theme }) => theme.colors.darkCyan};
      font-weight: bold;
      border-radius: 15px;
    }

    ${media.sm`
      .active-page {
        background: ${({ theme }) => theme.colors.darkCyan}; 
        color: ${({ theme }) => theme.colors.white}; 
        border-radius: 0;
        font-weight: 300;
      }
    `}
  }

  a {
    text-decoration: none;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 300;
    font-family: "Source Sans Pro";
    padding: 0.3rem 0.7rem;
    margin-right: 0.5rem;

    ${media.sm`
      font-size: 1.3rem;
      padding: 1.3rem;
      margin-right: 0;
    `}
  }
`
const Brand = styled(Link)`
  font-weight: 700;
  font-size: 1.3rem !important;
  text-transform: uppercase;
  font-family: "DM Serif Display" !important;
  font-weight: 400 !important;
  padding: 1.3rem 0 1rem 1.3rem !important;

  ${media.sm`
    padding: 1.3rem !important;
  `}
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
