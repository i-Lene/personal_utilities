import { NavLink } from "react-router";
import classes from "./MyMenu.module.scss";
import MenuLink from "./MenuLink";

function MyMenu() {
  return (
    <div className={classes.menu}>
      <MenuLink text="Home" link="/" />
      <MenuLink text="ToDo" link="/todo" />
      <MenuLink text="Blog" link="/blog" />
      <MenuLink text="Weather" link="/weather" />
    </div>
  );
}

export default MyMenu;
