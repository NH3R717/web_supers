import React from "react"
// import MenuIn from "../assets/svg/other/menu_in.svg"
import MenuOut from "../assets/svg/other/menu_out.svg"
// import Info from "../assets/svg/other/info.svg"

import styled from "styled-components"

function InstructNav(toggleSidebar) {
  return (
    <nav className="navbar">
      <button type="button" className="toggle-btn" onClick={toggleSidebar}>
        <MenuOut></MenuOut>
      </button>
    </nav>
  )
}

const Wrapper = styled.section`
  .instrcutIcons {
    padding: 0.3em 0;
  }
  #m_in {
  }
  #m_out {
  }
  #info {
  }
`

export default InstructNav
