import React from "react"
// import MenuIn from "../assets/svg/other/menu_in.svg"
import MenuOut from "../assets/svg/other/menu_out.svg"
import Info from "../assets/svg/other/info.svg"

const SideBar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleInfo = () => {
    setIsOpen(!isOpen)
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav>
      <button type="button" className="toggle-btn" onClick={toggleMenu}>
        <MenuOut />
      </button>
      <button type="button" className="toggle-btn" onClick={toggleInfo}>
        <Info />
      </button>
    </nav>
  )
}

export default SideBar
