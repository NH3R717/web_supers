//! edit from web_supers/src_shared – run command "npm run rsync"

// ToDo add copy line id to clipboard
// ToDo clean-up comments
// ToDo
// ToDo

import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
// import LineModal from "./LineModal";

// import SiteWarning from "/src/shared/assets/svg/footer/SUD.svg";

import Git from "/src/shared/assets/svg/footer/Git.svg";
import LinkedIn from "/src/shared/assets/svg/footer/LinkedIn.svg";
import Line from "/src/shared/assets/svg/footer/Line.svg";
import Yt from "/src/shared/assets/svg/footer/YT.svg";
import Flickr from "/src/shared/assets/svg/footer/Flickr.svg";
import LineQR from "/src/shared/assets/svg/footer/LineQR.svg";
import LineID from "/src/shared/assets/svg/footer/LineID.svg";

import SocialGroup from "/src/shared/assets/svg/footer/SocialGroup.svg";

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Wrapper>
      {/* <section id="siteUnderDevContainer">
        <span id="siteUnderDevLeft">
          <SiteWarning id="siteUnderDev" />
        </span>
        <div id="siteUnderDevRight"> </div>
      </section> */}
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
              <Line
                onClick={() => setModalIsOpen(true)}
                className="socialIcon"
              />
              <a href="https://www.youtube.com/channel/UC3vEEPENX59c2vOCvse-ttw">
                <Yt className="socialIcon" />
              </a>
              <a href="https://www.flickr.com/photos/tommybahama604/">
                <Flickr className="socialIcon" />
              </a>
            </g>
          </svg>
        </div>
        <div className="modalContainer" onClick={() => setModalIsOpen(false)}>
          <Modal
            className="modal"
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            // appElement={Info}
            style={{
              overlay: {
                position: "fixed",
                // width: "100%",
                // position: "relative",
                display: "flex",
                // padding: "1em",
                alignItems: "center",
                justifyContent: "center",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.85)",
              },
              content: {
                position: "absolute",
                // display: "flex",
                // margin: "auto",
                // alignItems: "center",
                // top: "";
                // left: "auto",
                // right: "",
                bottom: "10%",
                // width: "80%",
                height: "auto",
                maxWidth: "400px",
                // maxWidth: "300px",
                // border: "1px solid #ccc",
                background: "rgba(255, 255, 255, 0)",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "1.5em",
              },
            }}
          >
            {/* <div>
              <button onClick={() => setModalIsOpen(false)}>X</button>
            </div> */}
            <LineQR
              style={{
                height: "auto",
                width: "100%",
                justifyContent: "space-between",
                border: "1px solid #5A5A5A",
                borderRadius: "4px",
              }}
            />
            <LineID
              style={{ marginTop: ".3em", height: "auto", width: "101%" }}
            />
          </Modal>
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
    color: #5c5c5c;
    display: flex;
    justify-content: center;
    margin: -1.4em -0.6em 1.8em -0.6em;
    border-top: 0.2em solid #5a5a5a;
    /* margin: 1.8em -0.6em; */
    /* height: 588px; */
    /* width: 100%; */
    /* position: fixed; */
    /* bottom: 0; */
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
  @media all and (max-width: 400px) {
    /* .socialIcon {
      height: 2.5em;
      width: 2.5em;
    } */
    /* #siteUnderDevLeft {
      height: auto;
      width: 60em;
    } */
  }
  @media all and (min-width: 401px) {
    /* .socialIcon {
      height: 3.5em;
      width: 3.5em;
    } */
    /* #siteUnderDevLeft {
    } */
  }
  .socialContainer {
    width: 30em;
    margin: 0em 1em;
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
  .modalContainer {
    /* width: 30em;
    margin: 0em 1em;
    align-items: center; */
  }
  /* #siteUnderDevContainer {
    width: 20em;
  } */
  /* #siteUnderDevLeft {
    display: flex;
    margin-top: -2em;
    padding: 0 0 2em 2em;
    width: 100%;
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
