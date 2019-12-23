import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "components/layout"
import SEO from "components/seo"

import media from "utils/media"

const Grid = styled.section`
  display: block;

  ${media.lg`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 4rem;
  `}
`

const Article = styled.article`
  margin-bottom: 4rem;
`
const Title = styled.h3`
  margin-bottom: 0.6rem;

  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    font-weight: 300;

    :hover {
      color: ${({ theme }) => theme.colors.darkCyan};
    }
  }
`
const Small = styled.small`
  font-family: "Source Sans Pro";
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
`
const Excerpt = styled.section`
  margin-top: 1rem;

  p {
    font-size: 1.15rem;
    line-height: 1.6;
  }
`

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title="All Articles">
      <SEO title="All articles" />

      <Grid>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug

          return (
            <Article key={node.fields.slug}>
              <header>
                <Title>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </Title>
                <Small>{node.frontmatter.date}</Small>
              </header>
              <Excerpt>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </Excerpt>
            </Article>
          )
        })}
      </Grid>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
