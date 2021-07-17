import React from "react"
import styled from "styled-components"
import Info from "/src/assets/SVG/nav/info.svg"
import Instruct from "/src/assets/SVG/nav/instruct.svg"
import Blog from "/src/assets/SVG/nav/blog.svg"
import Projects from "/src/assets/SVG/nav/projects.svg"
import Resume from "/src/assets/SVG/nav/resume.svg"

const Nav = () => {
  return (
    <Wrapper>
      <main>
        <section>
          <a href="/">
            <Info className="navIcon" />
            {/* <h3>Info</h3> */}
          </a>
        </section>
        <section>
          <a style={{ marginRight: "2.2em", marginTop: "-3.5em" }} href="/">
            <Instruct className="navIcon" />
            {/* <h3>Instruct</h3> */}
          </a>
          <a style={{ marginLeft: "2.2em", marginTop: "-3.5em" }} href="/">
            <Blog className="navIcon" />
            {/* <h3>Blog</h3> */}
          </a>
        </section>
        <section>
          <a style={{ marginRight: "-1em", marginTop: "-.8em" }} href="/">
            <Projects className="navIcon" />
            {/* <h3>Project</h3> */}
          </a>
          <a style={{ marginLeft: "-1em", marginTop: "-.8em" }} href="/">
            <Resume className="navIcon" />
            {/* <h3>Resume</h3> */}
          </a>
        </section>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  main {
    margin-bottom: 4em;
  }
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  a {
    /* width: 5em;
    height: 2em;
    margin: 1em;
    padding: 1em; */
  }
  section {
    color: darkorange;
  }
  .text {
    text-transform: uppercase;
  }
  .navIcon {
    height: 10em;
    width: 10em;
    padding: 1em 1em 0em 1em;
  }
  h3 {
    margin: 0;
  }
`

export default Nav
