//! edit from web_supers/src_shared – run command "npm run rsync"

import React from "react"
import styled from "styled-components"

import LogoFull from "../assets/svg/header/scLogoFull.svg"
import LogoMini from "../assets/svg/header/scLogoMini.svg"

const Header = () => {
  return (
    <Wrapper>
      <header>
        <section className="left">
          <a href="https://supers.cafe">
            <LogoFull id="fullLogo" />
            <LogoMini id="miniLogo" />
          </a>
        </section>
        <section className="right"></section>
      </header>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  header {
    display: flex;
    flex-wrap: nowrap;
    margin: 0 -0.6em -1em;
    padding: 0em 0 0.35em 0;
    border-bottom: 0.2em solid #5a5a5a;
  }
  @media all and (max-width: 400px) {
    #fullLogo {
      display: none;
    }
    .left {
      margin: 0.2em 0 0 2em;
    }
  }
  @media all and (min-width: 401px) {
    #miniLogo {
      display: none;
    }
    .left {
      margin: 0.6em 3em 0 2em;
    }
  }
  /* below for mobile tap box presentation */
  a {
    height: 3em;
    padding-top: 2.5em;
  }
  #fullLogo {
    height: 2em;
    width: auto;
  }
  #miniLogo {
    height: 2em;
    width: auto;
  }
`

export default Header
