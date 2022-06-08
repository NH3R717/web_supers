import React from "react"
import { Link } from "gatsby"
import Layout from "/src/shared/components/Layout.js"
import SideBar from "../components/SideBar"

import InstMock from "../assets/mockup/lessonListMock.png"

import styled from "styled-components"

const instruct = () => {
  return (
    <Wrapper>
      <Layout>
        <section id="columnContainer">
          <div id="buttons">
            <SideBar />
          </div>
          <div id="listContainer">
            <Link to="/instruct_one">
              <Link to="/instruct_one">
                <img id="instMock" src={InstMock} alt="Mockup Image" />
                {/* <InstMock id="instMock" /> */}
              </Link>
            </Link>
          </div>
          <div id="right"></div>
        </section>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  #columnContainer {
    display: flex;
    margin: 0 1.5em 2.25em 1em;
    /* centers content */
    justify-content: space-between;
  }
  #listContainer {
    display: flex;
    /* effect multiple items */
    /* flex-direction: column; */
    /* effect multiple items(?) */
    /* align-items: center; */
    width: 100%;
    max-width: 660px;
    /* no effect */
    /* height: 100%; */
  }
  #instructIconContainer {
  }
  #buttons {
    margin: 2em 1em 0 -0.5em;
    width: 3em;
  }
  #right {
    width: 2em;
  }
  #instMock {
    /* no effect */
    /* justify-content: center; */
    /* narrow screen fit to */
    width: 100%;
    /* max-width: 960px; */
    /* no effect/effects short content */
    /* height: 100%; */
    margin: 2.75em 0 0 0;
  }
`

export default instruct
