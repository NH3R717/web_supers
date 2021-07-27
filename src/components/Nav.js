import React from "react";
import styled from "styled-components";

import Info from "/src/assets/SVG/nav/info.svg";
import Instruct from "/src/assets/SVG/nav/instruct.svg";
import Blog from "/src/assets/SVG/nav/blog.svg";
import Projects from "/src/assets/SVG/nav/projects.svg";
import Resume from "/src/assets/SVG/nav/resume.svg";

// import NavGroup from "/src/assets/SVG/nav/navGroup.svg"

const Nav = () => {
  return (
    <Wrapper>
      <main className="viewbox_container">
        <div>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            metadata=""
            viewBox="0 0 647 647"
          >
            <defs> </defs>
            <title> Supers Cafe | Interactive Menu</title>
            <g>
              {/* <NavGroup /> */}
              <a href="/">
                <Info />
              </a>
              <a href="https://instruct.supers.cafe">
                <Instruct />
              </a>
              <a href="https://blog.supers.cafe">
                <Blog />
              </a>
              <a href="https://projects.supers.cafe">
                <Projects />
              </a>
              <a href="https://resume.supers.cafe">
                <Resume />
              </a>
            </g>
          </svg>
        </div>
      </main>
    </Wrapper>
  );
};

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
`;

export default Nav;
