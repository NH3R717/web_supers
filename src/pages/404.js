import React from "react"
import styled from "styled-components"

const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>Page </h1>
        <h1>Error!</h1>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h1 {
    display: inline;
    color: darkorange;
  }
  .text {
    text-transform: uppercase;
  }
`

export default Error
