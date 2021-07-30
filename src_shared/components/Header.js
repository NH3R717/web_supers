//! edit from web_supers/src_shared – run command "npm run rsync"

import React from "react";
import styled from "styled-components";

import LogoFull from "/src/shared/assets/svg/header/scLogoFull.svg";
import LogoMini from "/src/shared/assets/svg/header/scLogoMini.svg";

const Header = () => {
  return (
    <Wrapper>
      <header>
        <section className="left">
          <a href="/">
            <LogoFull id="fullLogo" />
            <LogoMini id="miniLogo" />
          </a>
          {/* <h1>Supers Cafe</h1> */}
        </section>
        <section className="right"></section>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  header {
    display: flex;
    flex-wrap: nowrap;
    margin: 0 -0.6em 2em;
    padding: 0.2em 0 0.5em 0;
    border-bottom: 2px solid red;
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
  a {
    height: 3em;
    padding-top: 2.5em;
  }
  .right {
    /* width: 50%; */
  }
  .left {
  }
`;

export default Header;
