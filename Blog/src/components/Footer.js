//! edit from web_supers/src_shared – run command "npm run rsync"

// ToDo add copy line id to clipboard
// ToDo clean-up comments
// ToDo
// ToDo

import React, { useState } from "react"
import styled from "styled-components"

// import SocialGroup from "/src/shared/assets/svg/footer/SocialGroup.svg";
import SiteWarning from "../assets/svg/footer/SUD.svg"
const Footer = () => {
  return (
    <Wrapper>
      <section id="siteUnderDevContainer">
        <span id="siteUnderDevLeft">
          <SiteWarning id="siteUnderDev" />
        </span>
        <div id="siteUnderDevRight"> </div>
      </section>
      <footer>
        <div></div>
        <div className="copyContainer">
          <p>© Supers Cafe</p>
        </div>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  footer {
    display: flex;
    justify-content: flex-end;
    margin: -1.4em -0.6em 0em -0.6em;
    border-top: 0.2em solid #5a5a5a;
  }
  a {
    height: 100%;
  }
  p {
    /* padding: 0 1em 0 0;
    float: right; */
  }
  .copyContainer {
    margin-right: 1.5em;

    /* float: right; */
  }
  section {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 1em;
  }
  @media all and (max-width: 400px) {
  }
  @media all and (min-width: 401px) {
  }
  .socialContainer {
    width: 30em;
    margin: 0em 1em 2em 1em;
    align-items: center;
    /* flex-shrink: 0; */
  }
  .iconContainer {
    display: flex;
    margin-top: 2em;
    width: 100%;
    justify-content: space-between;
  }
  .socialIcon {
    padding: 0.3em 0.4em 0em 0.4em;
    justify-content: space-between;
  }
  .ReactModal__Body--open {
    overflow: hidden;
  }
  .ReactModal__Content .ReactModal__Content--after-open .modal {
    outline: none;
  }

  #siteUnderDevContainer {
    width: 100%;
  }
  #siteUnderDevLeft {
    display: flex;
    margin-top: -4em;
    padding: 0 0 2em 2em;
    height: 3em;
    width: 100%;
    justify-content: left;
  }
  #siteUnderDevRight {
    width: 100%;
  }
  #siteUnderDev {
    display: flex;
    margin-top: 2em;
    width: 100%;
    justify-content: left;
  }
`

export default Footer
