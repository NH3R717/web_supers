//! edit from web_supers/src_shared – run command "npm run rsync"

// ToDo add copy line id to clipboard
// ToDo clean-up comments
// ToDo
// ToDo

import React, { useState } from "react"
import styled from "styled-components"
import Modal from "react-modal"

import Git from "../assets/svg/footer/Git.svg"
import LinkedIn from "../assets/svg/footer/LinkedIn.svg"
import Line from "/src/shared/assets/svg/footer/Line.svg"
import Yt from "/src/shared/assets/svg/footer/YT.svg"
import Flickr from "/src/shared/assets/svg/footer/Flickr.svg"
import LineQR from "/src/shared/assets/svg/footer/LineQR.svg"
import LineID from "/src/shared/assets/svg/footer/LineID.svg"

// import SocialGroup from "/src/shared/assets/svg/footer/SocialGroup.svg";
import SiteWarning from "/src/shared/assets/svg/footer/SUD.svg"
const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <Wrapper>
      <section id="siteUnderDevContainer">
        <span id="siteUnderDevLeft">
          <SiteWarning id="siteUnderDev" />
        </span>
        <div id="siteUnderDevRight"> </div>
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
              {/* <SocialGroup /> */}
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
        <div
          className="modalContainer"
          onClick={() => setModalIsOpen(false)}
          onKeyPress={() => setModalIsOpen(false)}
          role="article"
        >
          <Modal
            className="modal"
            isOpen={modalIsOpen}
            onClick={() => setModalIsOpen(false)}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel={"Line ID"}
            // role="Line ID"
            // preventScroll={true}
            // appElement={Info}
            style={{
              overlay: {
                position: "fixed",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.85)",
              },
              content: {
                position: "absolute",
                bottom: "10%",
                height: "auto",
                maxWidth: "400px",
                background: "rgba(255, 255, 255, .2)",
                WebkitOverflowScrolling: "touch",
                borderRadius: "2em",
                padding: "1.5em",
              },
            }}
          >
            <LineQR
              style={{
                height: "auto",
                width: "100%",
                // border: "2px solid #5A5A5A",
                // borderRadius: "4px",
              }}
            />
            <LineID
              style={{ marginTop: ".5em", height: "auto", width: "101%" }}
            />
          </Modal>
        </div>
        {/* </div> */}
        {/* <div className="copyContainer">
          <p>© Supers Cafe</p>
        </div> */}
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  footer {
    display: flex;
    justify-content: center;
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
