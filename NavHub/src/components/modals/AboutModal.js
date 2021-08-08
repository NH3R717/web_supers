// ToDo – npm i body-scroll-lock

import React from "react"
import styled from "styled-components"
import { colors } from "../../shared/constants/variables"

import { siteSection, blogSections } from "../../data/aboutData"

// Modal.setAppElement("#root")

const AboutContent = () => {
  return (
    <Wrapper>
      <main>
        <section id="site">
          <h1>This Site</h1>
          {siteSection.map(section => {
            const { id, title, body } = section
            return (
              <article key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
              </article>
            )
          })}
        </section>
        <section id="blog">
          <h1>Blog Pages</h1>
          {blogSections.map(section => {
            const { id, title, body } = section
            return (
              <article key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
              </article>
            )
          })}
        </section>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  main {
    font-family: "Hind";
    padding-left: 0.5em;
  }
  h1 {
    text-decoration: underline solid ${colors.BrandSeaFoam} 0.15em;
  }
  h1,
  h2 {
    color: ${colors.BrandGreyMid};
  }
  h2 {
    margin-left: 0.1em;
    color: ${colors.IconOrange};
  }
  p {
    color: ${colors.BrandNotBlack};
    margin-left: 0.4em;
  }
  li {
    list-style: none;
  }
  #site {
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
    maxWidth: "650px",
    maxHeight: "600px",
    border: ".1em solid rgba(65, 100, 245, .25)",
    background: "rgba(255, 255, 255, 0.92)",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: ".5em .5em .5em .5em",
    outline: "none",
    padding: ".75em .75em 1em .75em",
  },
}

export { AboutContent, style }
