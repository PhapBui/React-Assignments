import React from "react";
import styles from "./NavbarItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarItem = ({ data }) => {
  return (
    <li className={`${styles["nav-item"]}  ${data.active && styles["active"]}`}>
      <div className={`${styles["nav-item__icon"]}`}>
        <FontAwesomeIcon icon={data.icon} />
      </div>
      <div className={`${styles["nav-item__type"]}`}>
        <span>{data.type}</span>
      </div>
    </li>
  );
};

export default NavbarItem;
