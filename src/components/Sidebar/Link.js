import { NavLink } from "react-router-dom";
import "./Link.scss";

function Link({ url, name, Icon }) {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        "sidebar-nav__link " + (isActive ? "sidebar-nav__link--active" : "")
      }
    >
      {<Icon />}
      {name}
    </NavLink>
  );
}

export default Link;
