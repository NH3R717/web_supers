import React from "react"
// import MenuIn from "../assets/svg/other/menu_in.svg"
// import MenuOut from "../assets/svg/other/menu_in.svg"
import Info from "../assets/svg/other/info.svg"

import styled from "styled-components"

function InstructInfo(toggleSidebar) {
  return (
    <Wrapper>
      <section className="navbar">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <Info></Info>
        </button>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .toggle-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    transition: var(--transition);
  }
`

export default InstructInfo
