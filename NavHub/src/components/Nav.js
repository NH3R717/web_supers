import React, { useState } from "react"
import Modal from "react-modal"
import styled from "styled-components"

import Info from "/src/assets/svg/nav/info.svg"
import Instruct from "/src/assets/svg/nav/instruct.svg"
import Blog from "/src/assets/svg/nav/blog.svg"
import Projects from "/src/assets/svg/nav/projects.svg"
import Resume from "/src/assets/svg/nav/resume.svg"

// import NavGroup from "/src/assets/SVG/nav/navGroup.svg"
// Modal.setAppElemen("#root")
// Modal.defaultStyles
const Nav = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <Wrapper>
      <nav className="viewbox_container">
        <div className="modalDiv" onClick={() => setModalIsOpen(false)}>
          <Modal
            className="modal"
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            // appElement={Info}
            style={{
              overlay: {
                position: "relative",
                display: "flex",
                margin: "1em",
                alignItems: "center",

                justifyContent: "center",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.60)",
              },
              content: {
                position: "absolute",
                // display: "flex",
                // margin: "auto",
                // alignItems: "center",
                // top: "";
                // left: "auto",
                // right: "",
                bottom: "9em",
                width: "90%",
                maxWidth: "300px",
                border: "1px solid #ccc",
                background: "#fff",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "20px",
              },
            }}
          >
            <div>
              <button onClick={() => setModalIsOpen(false)}>X</button>
            </div>
            <h2>Fresh Modal</h2>
            <p>Id reprehenderit proident fugiat cillum consectetur.</p>{" "}
            <p>Non mollit occaecat id nisi eu non exercitation nulla.</p>{" "}
            {/* <p>
                Ullamco amet exercitation culpa reprehenderit magna exercitation.
              </p>{" "}
              <p>Id officia dolor nulla mollit sint.</p>{" "}
              <p>
                Aliquip excepteur aute excepteur enim anim ea et ad aliqua proident
                occaecat culpa mollit Lorem.
              </p>{" "} */}
          </Modal>
        </div>
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
  .modalDiv {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default Nav
