//! edit from web_supers/src_shared – run command "npm run rsync"

import React from "react";
import styled from "styled-components";

import SiteWarning from "/src/shared/assets/svg/footer/SUD.svg";

import Git from "/src/shared/assets/svg/footer/Git.svg";
import LinkedIn from "/src/shared/assets/svg/footer/LinkedIn.svg";
import Line from "/src/shared/assets/svg/footer/Line.svg";
import Yt from "/src/shared/assets/svg/footer/YT.svg";
import Flickr from "/src/shared/assets/svg/footer/Flickr.svg";

import SocialGroup from "/src/shared/assets/svg/footer/SocialGroup.svg";

const Footer = () => {
  return (
    <Wrapper>
      <section id="siteUnderDevContainer">
        {/* <span id="siteUnderDevLeft">
          <SiteWarning id="siteUnderDev" />
        </span> */}
        {/* <div id="siteUnderDevRight"> </div> */}
      </section>
      <footer>
        <div className="socialContainer">
          {/* <div className="iconContainer"> */}
          <svg
            className="iconContainer"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            metadata=""
            viewBox="0 0 505 65"
          >
            <defs> </defs>
            <title> Supers Cafe | Social Links</title>
            <g>
              <SocialGroup />
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
            </g>
          </svg>
        </div>
        {/* </div> */}
        {/* <div className="copyContainer">
          <p>© Supers Cafe</p>
        </div> */}
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  footer {
    /* font-family: "Comfortaa"; */
    color: #5c5c5c;
    display: flex;
    /* width: 100%; */
    justify-content: center;
    margin: -1.2em -0.6em 1.8em -0.6em;
    /* margin: 1.8em -0.6em; */
    border-top: 2px solid red;
  }
  a {
    height: 100%;
  }
  p {
    padding: 0 1em 0 0;
    float: right;
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
  /* display: flex; */
  @media all and (max-width: 400px) {
    /* .socialIcon {
      height: 2.5em;
      width: 2.5em;
    } */
    #siteUnderDevLeft {
    }
  }
  @media all and (min-width: 401px) {
    /* .socialIcon {
      height: 3.5em;
      width: 3.5em;
    } */
    #siteUnderDevLeft {
    }
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
  .socialIcon {
    padding: 0.3em 0.4em 0em 0.4em;
    justify-content: space-between;
  }
  /* #siteUnderDevContainer {
    width: 20em;
    /* align-items: left; */
  } */
  /* #siteUnderDevLeft {
    display: flex;
    margin-top: -2em;
    padding: 0 0 2em 2em;
    /* width: 100%; */
    justify-content: left;
  } */
  /* #siteUnderDevRight {
    width: 100%;
  } */
  /* #siteUnderDev {
    display: flex;
    margin-top: 2em;
    width: 100%;
    justify-content: left;
  } */
`;

export default Footer;
