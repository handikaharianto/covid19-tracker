import { FaBars } from "react-icons/fa";
import "./Header.scss";

function Header({ setIsSidebarActive, handleClick }) {
  return (
    <header>
      <h1>dashboard</h1>
      <button className="nav-btn" onClick={handleClick}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header;
