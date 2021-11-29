import { FaBars } from "react-icons/fa";
import "./Header.scss";

function Header({ setIsSidebarActive, handleClick, title }) {
  return (
    <header>
      <h1>{title}</h1>
      <button className="nav-btn" onClick={handleClick}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header;
