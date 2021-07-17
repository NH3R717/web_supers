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
        <section style={{ marginTop: "2em" }}>
          <a href="/">
            <Git className="socialIcon" />
          </a>
          <a href="/">
            <LinkedIn className="socialIcon" />
          </a>
          <a href="/">
            <Line className="socialIcon" />
          </a>
          <a href="/">
            <YT className="socialIcon" />
          </a>
          <a href="/">
            <Flickr className="socialIcon" />
          </a>
        </section>
        <section style={{ marginTop: "2em" }}>
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
    display: flex;
    justify-content: space-between;
  }
  .socialIcon {
    height: 2em;
    width: 2em;
    padding: 0.3em 0.3em 0em 1em;
  }
  p {
    /* margin-bottom: -2em; */
    /* align-items: right; */
    padding: 0 1em 0 0;
  }
  section {
    margin-top: 2em;
  }
`

export default Footer
