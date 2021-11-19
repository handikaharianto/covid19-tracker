import "./Link.scss";

function Link({ url, name, Icon }) {
  return (
    <li className="sidebar-nav__link">
      <a href={url}>
        {<Icon />}
        {name}
      </a>
    </li>
  );
}

export default Link;
