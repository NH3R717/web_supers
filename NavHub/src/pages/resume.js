import React from "react"
import Layout from "/src/shared/components/Layout.js"
import styled from "styled-components"
import { ResumeContent } from "../components/Resume"

const resume = () => {
  return (
    <Layout>
      <Wrapper>
        <ResumeContent />
      </Wrapper>
    </Layout>
  )
}
const Wrapper = styled.section`
  div {
    /* color: darkorange; */
  }
  .text {
    text-transform: uppercase;
  }
`
export default resume
