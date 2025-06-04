import { NavLink } from "react-router";
import classes from "./MyMenu.module.scss";

export default function MenuLink({ text, link }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `${isActive ? classes.active : ""} ${classes.menu_item}`
      }
    >
      <span className={classes.menu_item_content}>{text}</span>
    </NavLink>
  );
}
