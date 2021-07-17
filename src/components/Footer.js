import React from "react"
import styled from "styled-components"

import Git from "/src/assets/SVG/footer/Git.svg"
import LinkedIn from "/src/assets/SVG/footer/LinkedIn.svg"
import Line from "/src/assets/SVG/footer/Line.svg"
import YT from "/src/assets/SVG/footer/YT.svg"
import Flickr from "/src/assets/SVG/footer/Flickr.svg"

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <a href="">
          <Git />
        </a>
        <a href="">
          <LinkedIn />
        </a>
        <a href="">
          <Line />
        </a>
        <a href="">
          <YT />
        </a>
        <a href="">
          <Flickr />
        </a>
        <section>
          <p>© Supers Cafe</p>
        </section>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  footer {
    @font-face {
      font-family: "Comfortaa";
      src: local("Comfortaa"),
        url(src/assets/font/Comfortaa-VariableFont_wght.ttf) format("truetype");
    }
    font-family: "Comfortaa";
    color: #5c5c5c;
    align-items: right;
  }
  p {
    align-items: right;
  }
  section {
  }
`

export default Footer
