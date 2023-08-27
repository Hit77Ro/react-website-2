const NavLink = ({ link }) => {
  return (
    <li>
      <a href={"#" + link}>{link}</a>
    </li>
  );
};

export default NavLink;
