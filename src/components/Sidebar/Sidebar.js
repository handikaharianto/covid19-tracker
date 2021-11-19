import "./Sidebar.scss";
import links from "./data";
import { MdCoronavirus } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import Link from "./Link";

function Sidebar({ isSidebarActive, setIsSidebarActive, handleClick }) {
  return (
    <aside className={isSidebarActive ? "active" : ""}>
      <div className="sidebar-top">
        <MdCoronavirus />
        <h1 className="sidebar-top__logo">Covid-19 Tracker</h1>
        <button className="nav-close-btn" onClick={handleClick}>
          <FaTimes />
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {links.map((link, index) => {
            return <Link key={index} {...link} />;
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
