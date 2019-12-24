import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import media from "utils/media"

import Layout from "components/layout"
import SEO from "components/seo"

const Post = styled.article`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 300;
    margin-bottom: 1rem;
    font-family: "Playfair Display";
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  ul,
  ol {
    margin-bottom: 2rem;
  }

  hr {
    height: 0.5px;
  }

  ${media.sm`
    max-width: 900px;
    margin: 0 auto;
  `}
`
const PostNav = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-left: 0;

  li {
    list-style-type: none;
  }

  li + li {
    margin-left: auto;
  }

  span {
    font-weight: bold;
    font-size: 1.3rem;
    display: block;
  }

  a {
    text-decoration: none;
    font-size: 1.2rem;
    color: black;
    padding: 1rem 0;

    :hover {
      text-decoration: underline;
    }
  }
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout
      location={location}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Post>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <nav>
          <PostNav>
            <li>
              {previous && (
                <>
                  <span>Previous article:</span>

                  <Link to={previous.fields.slug} rel="prev">
                    {previous.frontmatter.title}
                  </Link>
                </>
              )}
            </li>
            <li>
              {next && (
                <>
                  <span>Next article:</span>

                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title}
                  </Link>
                </>
              )}
            </li>
          </PostNav>
        </nav>
      </Post>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
