import React from "react"
import Less from "/src/other/Less.js"

import Layout from "/src/shared/components/Layout.js"
// import { StyledButton } from "/src/other/Button.js"
import styled from "styled-components"

const index = () => {
  return (
    <Wrapper>
      <Layout>
        <span>
          <p>Direct page url in the page folder</p>
        </span>
        {/* <StyledButton>CLE</StyledButton> */}
        <Less />
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  p {
    margin: 2em;
  }

  .button {
    margin: 6em;
  }
`

export default index
