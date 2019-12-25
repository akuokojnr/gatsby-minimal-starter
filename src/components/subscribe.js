import React from "react"
import styled from "styled-components"
import media from "utils/media"

const Wrap = styled.div`
  margin-bottom: 40px;

  ${media.md`
    margin-left: auto;
    margin-bottom: 0;
  `}
`

const Desc = styled.div`
  margin-bottom: 10px;

  p {
    font-style: normal;
    font-size: 1.3rem !important;
    font-weight: bold;
    font-family: "Source Sans Pro";
    color: ${({ theme }) => theme.colors.black};
  }

  p:first-child {
    margin-bottom: 10px !important;
  }

  p:last-child {
    font-size: 1.1rem !important;
    font-weight: 300;
    font-style: italic;
  }
`

const Form = styled.form`
  display: flex;
`
const Input = styled.input`
  width: 100%;
  font-family: "Source Sans Pro";
  padding: 10px 15px;
  border-radius: 5px 0 0 5px;
  border: 1px solid ${({ theme }) => theme.colors.darkCyan};

  ${media.md`
    max-width: 300px;
  `}
`
const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkCyan};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0 5px 5px 0;
  border: 1px solid ${({ theme }) => theme.colors.darkCyan};
  font-family: "Source Sans Pro";
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.15rem;
`

const Newsletter = () => (
  <Wrap>
    <Desc>
      <p>Stay in the loop:</p>
      <p>Subscribe to my weekly newsletter. No spam ever.</p>
    </Desc>
    <Form name="subscribers" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="subscribers" />

      <Input
        type="email"
        name="email"
        placeholder="What's your email?"
        required
      />
      <Button type="submit">Subscribe</Button>
    </Form>
  </Wrap>
)

export default Newsletter
