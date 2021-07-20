import React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <Wrapper>
      <header>
        <section className="left">
          <h1>Supers Cafe</h1>
        </section>
        <section className="right"></section>
      </header>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  header {
    display: flex;
    flex-wrap: nowrap;
    margin: 0 -0.6em 2em;
    padding: 0.5em 0;
    border-bottom: 2px solid red;
  }
  @media all and (max-width: 400px) {
    h1 {
      font-size: 1.6em;
    }
  }
  @media all and (min-width: 401px) and (max-width: 575px) {
    h1 {
      font-size: 2em;
    }
  }
  @media all and (min-width: 576px) {
    h1 {
      font-size: 3em;
    }
  }
  h1 {
    font-family: "Comfortaa";
    /* font-size: 2.6em; */
    color: #f56546;
    margin-left: 0.6em;
  }
  .right {
    /* width: 50%; */
  }
  .left {
  }
`

export default Header
