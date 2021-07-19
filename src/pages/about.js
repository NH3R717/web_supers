import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <div>
          <h2 className="text">About Page</h2>
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
