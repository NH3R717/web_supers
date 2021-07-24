import React from "react"
import styled from "styled-components"

import Git from "/src/assets/SVG/footer/Git.svg"
import LinkedIn from "/src/assets/SVG/footer/LinkedIn.svg"
import Line from "/src/assets/SVG/footer/Line.svg"
import Yt from "/src/assets/SVG/footer/YT.svg"
import Flickr from "/src/assets/SVG/footer/Flickr.svg"

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <div className="socialContainer">
          <div className="iconContainer">
            <a href="https://github.com/NH3R717">
              <Git className="socialIcon" />
            </a>
            <a href="https://www.linkedin.com/in/tomas-umholtz/">
              <LinkedIn className="socialIcon" />
            </a>
            <a href="/">
              <Line className="socialIcon" />
            </a>
            <a href="https://www.youtube.com/channel/UC3vEEPENX59c2vOCvse-ttw">
              <Yt className="socialIcon" />
            </a>
            <a href="https://www.flickr.com/photos/tommybahama604/">
              <Flickr className="socialIcon" />
            </a>
          </div>
        </div>
        {/* <div className="copyContainer">
          <p>© Supers Cafe</p>
        </div> */}
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  footer {
    /* font-family: "Comfortaa"; */
    color: #5c5c5c;
    display: flex;
    /* width: 100%; */
    justify-content: center;
    /* margin-top: 2em; */
    margin: 1.8em -0.6em;
    /* padding: 0.5em; */
    border-top: 2px solid red;

    /* display: flex; */
  }
  .socialContainer {
    width: 30em;
    margin: 0em 1em;
    align-items: center;
  }
  .iconContainer {
    display: flex;
    margin-top: 2em;
    width: 100%;
    justify-content: space-between;
  }
  a {
    height: 100%;
  }
  .socialIcon {
    height: 3.5em;
    width: 3.5em;

    /* padding: 0.3em 0.3em 0em 1em; */
    justify-content: space-between;
  }
  p {
    padding: 0 1em 0 0;
    float: right;
    /* margin-bottom: -2em; */
    /* float: right; */
  }
  /* .copyContainer {
    margin-top: 1.5em;
    float: right;
  } */
  section {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 1em;
  }
`

export default Footer
