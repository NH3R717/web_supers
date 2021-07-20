import React from "react"
import styled from "styled-components"

import Info from "/src/assets/SVG/nav/info.svg"
import Instruct from "/src/assets/SVG/nav/instruct.svg"
import Blog from "/src/assets/SVG/nav/blog.svg"
import Projects from "/src/assets/SVG/nav/projects.svg"
import Resume from "/src/assets/SVG/nav/resume.svg"

import NavGroup from "/src/assets/SVG/nav/navGroup.svg"

const Nav = () => {
  return (
    <Wrapper>
      <main className="viewbox_container">
        <div>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            metadata=""
            viewBox="0 0 572 572"
          >
            <defs> </defs>
            <title> Supers Cafe | Interactive Menu</title>
            {/* <NavGroup /> */}
            <g>
              <a href="">
                <Info />
              </a>
              <a href="">
                <Instruct />
              </a>
              <a href="">
                <Blog />
              </a>
              <a href="">
                <Projects />
              </a>
              <a href="">
                <Resume />
              </a>
            </g>
          </svg>
        </div>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* background-color: pink; */
  main {
    /* display: flex; */
  }
  .viewbox_container {
    position: relative;
    width: 100%;
    max-width: 960px;
    margin: 5em auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
`

export default Nav

// notes
// viewBox="0 0 512 512"
