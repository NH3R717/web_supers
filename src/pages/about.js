import React from "react"
import Layout from "../components/Layout"
import { StyledButton } from "../other/button"
import styled from "styled-components"

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <div>
          <h2 className="text">about</h2>
          <StyledButton>Junk</StyledButton>
        </div>
      </Wrapper>
    </Layout>
  )
}
const Wrapper = styled.section`
  div {
    color: darkorange;
  }
  .text {
    text-transform: uppercase;
  }
`
export default about
