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
        <div className="content_push">
          <Header />
          <div className="site_content">{children}</div>
          <Footer />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};
const Wrapper = styled.section`
  .content_push {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .site_content {
    /* height: 100vh; */
    flex-grow: 1;
  }
`;

export default Layout;
