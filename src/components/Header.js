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
    @font-face {
      font-family: "Comfortaa";
      src: local("Comfortaa"),
        url(src/assets/font/Comfortaa-VariableFont_wght.ttf) format("truetype");
    }
    font-family: "Comfortaa";
    font-size: 2.6em;
    color: #f56546;
    margin-left: 0.6em;

    /* -webkit-text-stroke: 0.02em #5c5c5c; */
  }
`

export default Header
