import React from "react"
import { Link } from "gatsby"
import Layout from "/src/shared/components/Layout.js"
import InstMock from "../assets/mockup/lessonListMock.png"

import styled from "styled-components"

const instruct = () => {
  return (
    <Wrapper>
      <Layout>
        <section id="columnContainer">
          <div id="listContainer">
            <Link to="/instruct_one">
              <img id="instMock" src={InstMock} alt="simply recipes" />
              {/* <InstMock id="instMock" /> */}
            </Link>
          </div>
        </section>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  #columnContainer {
    display: flex;
    margin: 0 2em 2.25em 2em;
    /* centers content */
    justify-content: center;
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
