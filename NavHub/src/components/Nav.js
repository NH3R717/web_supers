// ToDo about modal
// ToDo about content
// ToDo nav icon advance (animation, detail [redraw])
// ToDo cloud header
// ToDo ocean footer
// ToDo prevent scroll while modal
// ToDo

// import React from "react"
// import { useState } from "react"
import React, { useState } from "react"
import Modal from "react-modal"
import { Link } from "gatsby"
import { AboutContent, style } from "./modals/AboutModal"
// import { style } from "./modals/ResumeModal"

import styled from "styled-components"

import Info from "/src/assets/svg/nav/info.svg"
import Instruct from "/src/assets/svg/nav/instruct.svg"
import Blog from "/src/assets/svg/nav/blog.svg"
import Projects from "/src/assets/svg/nav/projects.svg"
import Resume from "/src/assets/svg/nav/resume.svg"
import CloseButton from "../shared/components/CloseButton"

// Modal.setAppElement("#root")
// import NavGroup from "/src/assets/SVG/nav/navGroup.svg"

const Nav = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <Wrapper>
      <Modal
        // preventScroll={true}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        onKeyPress={() => setModalIsOpen(false)}
        style={style}
      >
        <div>
          <CloseButton onClick={() => setModalIsOpen(false)}></CloseButton>
        </div>
        <AboutContent />
      </Modal>
      <nav className="viewbox_container">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          metadata=""
          viewBox="0 0 647 647"
        >
          <defs> </defs>
          <title> Supers Cafe | Navigation Hub</title>
          <g>
            {/* <NavGroup /> */}
            <Info onClick={a => setModalIsOpen(true)} />
            <a href="https://blog.supers.cafe/instruct">
              <Instruct />
            </a>
            <a href="https://blog.supers.cafe/personal">
              <Blog className="overlay" />
            </a>
            <a href="https://blog.supers.cafe/projects">
              <Projects />
            </a>
            <Link to="/resume">
              <Resume />
            </Link>
          </g>
        </svg>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* background-color: pink; */
  nav {
    /* display: flex;
    min-height: 100%;
    flex: 1; */
    margin-top: 100px;
    position: relative;
  }
  .viewbox_container {
    /* width: 100%; */
    max-width: 960px;
    margin: 5.5em auto;
    padding: 0 1.5em;
    box-sizing: border-box;
  }
  .modalDiv {
    font-family: "Comfortaa";
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .overlay {
    color: rgba(255, 255, 255, 0.8);
  }
`

export default Nav
