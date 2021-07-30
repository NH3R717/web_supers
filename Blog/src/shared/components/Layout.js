//! edit from web_supers/src_shared – run command "npm run rsync"

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

import "@csstools/normalize.css";
import "/src/shared/css/main.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Header />
        {/* below doesnt work with Safari */}
        {/* <section className="content_push">
          <article className="site_content">{children}</article>
        </section> */}
        {children}
        <Footer />
      </Wrapper>
    </React.Fragment>
  );
};
const Wrapper = styled.section`
  .content_push {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-around;
  }

  .site_content {
    /* height: 100vh; */
    /* flex-grow: 1; */
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

export default Layout;
