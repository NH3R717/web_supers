//! edit from web_supers/src_shared – run command "npm run rsync"

import React from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styled from "styled-components"

import "@csstools/normalize.css"
import "/src/shared/css/main.css"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Wrapper
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "98vh",
        }}
      >
        {/* <section className="content_push"> */}
        <Header />
        {/* below solution for footer push on high screens – doesn't work with Safari */}
        {/* <article className="site_content">{children}</article> */}
        <main className="site_content">{children}</main>
        {/* <h1 className="site_content">Junk</h1> */}
        <Footer />
        {/* </section> */}
      </Wrapper>
    </React.Fragment>
  )
}
const Wrapper = styled.section`
  /* below solution for footer push on high screens – doesn't work with Safari */
  /* .content_push {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-around;
  } */

  .site_content {
    /* below solution for footer push on high screens – doesn't work with Safari */
    /* height: 100vh; */
    /* flex-grow: 1; */
    /* align-items: center;
    justify-content: center; */
    /* display: flex; */
    flex: 1 0 auto;
  }
`

export default Layout
