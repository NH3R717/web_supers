import React, { useState } from "react"
import Modal from "react-modal"
import styled from "styled-components"

import Info from "/src/assets/svg/nav/info.svg"
import Instruct from "/src/assets/svg/nav/instruct.svg"
import Blog from "/src/assets/svg/nav/blog.svg"
import Projects from "/src/assets/svg/nav/projects.svg"
import Resume from "/src/assets/svg/nav/resume.svg"

// import NavGroup from "/src/assets/SVG/nav/navGroup.svg"

const Nav = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <Wrapper>
      <nav className="viewbox_container">
        <Modal isOpen={modalIsOpen}>
          <div>
            <button onClick={() => setModalIsOpen(false)}>X</button>
          </div>
          <h2>Fresh Modal</h2>
          <p>
            Id reprehenderit proident fugiat cillum consectetur. Non mollit
            occaecat id nisi eu non exercitation nulla. Ullamco amet
            exercitation culpa reprehenderit magna exercitation. Id officia
            dolor nulla mollit sint. Aliquip excepteur aute excepteur enim anim
            ea et ad aliqua proident occaecat culpa mollit Lorem.{" "}
          </p>
        </Modal>

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
            <Info onClick={() => setModalIsOpen(true)} />
            <a href="https://blog.supers.cafe/instruct">
              <Instruct />
            </a>
            <a href="https://blog.supers.cafe/personal">
              <Blog />
            </a>
            <a href="https://blog.supers.cafe/projects">
              <Projects />
            </a>

            <Resume />
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
`

export default Nav
