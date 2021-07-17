import React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <Wrapper>
      <header>
        <h1>Supers Cafe</h1>
      </header>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h1 {
    color: #f56546;
  }
`

export default Header
