import React from "react"
import styled from "styled-components"

import Layout from "components/layout"
import SEO from "components/seo"

import media from "utils/media"

const Grid = styled.section`
  display: block;

  ${media.sm`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 2rem;
  `}

  ${media.lg`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 4rem;
  `}
`

const Year = styled.div`
  margin-bottom: 50px;
  font-family: "Inria Serif";

  li {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
    font-family: "Source Sans Pro";
  }
`
const Title = styled.h2`
  font-weight: 300;
  font-size: 2rem;
  margin-bottom: 20px;
`

let content = [
  {
    year: "2019",
    books: [
      "The Polymath by Waqad Ahmed",
      "Space Barons by Christian Davenport",
      "Ultralearning by Scott Young",
      "Maxims and Aphorisms by Johann Wolfgang von Goethe",
      "Wright Brothers by David McCullough",
      "Deep Work by Cal Newport",
      "So good they can't ignore you by Cal Newport",
      "Talent is Overrated: What Really Separates World‑Class Performers by Geoffrey Colvin",
      "Outliers: The Story of Success by Malcolm Gladwell",
      "Grit by Angela Duckworth",
      "Never Split the Difference by Chris Voss",
      "China Study by Colin T. Campbell",
    ],
  },
  {
    year: "2018",
    books: [
      "Moonwalking with Einstein by Joshua Foer",
      "Make it stick by Mark A. McDaniel and Peter C Brown",
      "Focus by Daniel Goleman",
      "Emotional Intelligence by Daniel Goleman",
      "De Oratore by Marcus Cicero",
      "Ad Herrenium by Marcus Cicero",
      "Quiet: The power of Introverts in a World that can't stop talking by Susan Cain",
    ],
  },
  {
    year: "2017",
    books: [
      "You have a brain by Ben Carson",
      "Gifted Hands by Ben Carson",
      "Think and Grow Rich by Napoleon Hill",
      "The Richest man in Babylon George Clason",
      "Mind is the master by James Allen",
    ],
  },
]

const Reading = () => {
  return (
    <Layout title="Books">
      <SEO title="Books" />

      <Grid>
        {content.map(({ year, books }) => {
          return (
            <Year key={year}>
              <Title>{year}</Title>
              <ol>
                {books.map((i, x) => (
                  <li key={`book-${x}`}>{i}</li>
                ))}
              </ol>
            </Year>
          )
        })}
      </Grid>
    </Layout>
  )
}

export default Reading
