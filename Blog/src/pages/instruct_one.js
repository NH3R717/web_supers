import React from "react"
import Layout from "/src/shared/components/Layout.js"
import InstMock from "../assets/mockup/instructionMock.svg"

import styled from "styled-components"

const instruct_one = () => {
  return (
    <Wrapper>
      {/* <main id="expand"> */}
      <Layout>
        <section id="columnContainer">
          {/* <img id="instMock" src={instMock} alt=""></img> */}
          <div id="listContainer">
            <InstMock id="instMock" />
          </div>
        </section>
      </Layout>
      {/* </main> */}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  #expand {
    /* display: flex;
    flex-direction: column; */
  }

  #columnContainer {
    /* min-height: 100vh; */
    display: flex;
    /* flex-direction: column; */
    margin: 0 2em 3.75em 2em;
    /* negates centering */
    /* max-width: 960px; */
    justify-content: center;
  }

  #listContainer {
    /* display: flex; */
    flex: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    /* width: 100%; */
    max-width: 660px;
    /* height: 100%; */
    /* justify-content: center; */
  }
  #instMock {
    width: 100%;
    /* max-width: 960px; */
    height: 100%;
    margin: 2em 0 0 0;
    /* height: 2000px; */
  }
`

export default instruct_one
