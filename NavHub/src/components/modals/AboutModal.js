import React from "react"
import styled from "styled-components"

import { sections } from "../../data/aboutData"

// Modal.setAppElement("#root")

const AboutContent = () => {
  return (
    <Wrapper>
      <section>
        <article>
          <div></div>
          <div>
            {sections.map(section => {
              const { id, title, body } = section
              return (
                <article key={id}>
                  <h2>{title}</h2>
                  <p>{body}</p>
                </article>
              )
            })}
          </div>
        </article>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  @media all and (max-width: 400px) {
  }
  li {
    list-style: none;
  }
  section {
    font-family: "Hind";
    /* font-family: "Comfortaa"; */
    /* display: flex; */
  }
  div,
  span {
  }
  .skills {
    /* float: "right"; */
  }
`

const style = {
  overlay: {
    position: "fixed",
    display: "flex",
    margin: "0em",
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
    bottom: "0",
    margin: "auto",
    top: "4em",
    maxWidth: "1000px",
    maxHeight: "600px",
    border: "1px solid #ccc",
    background: "rgba(255, 255, 255, 0.92)",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
}

export { AboutContent, style }
