import React from "react";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import NavbarItem from "./NavbarItem.jsx";

import styles from "./Navbar.module.css";

// Data Navbar
const data = [
  {
    type: "Stays",
    icon: faBed,
    active: true,
  },
  {
    type: "Flights",
    icon: faPlane,
    active: false,
  },
  {
    type: "Car rentals",
    icon: faCar,
    active: false,
  },
  {
    type: "Attractions",
    icon: faBed,
    active: false,
  },
  {
    type: "Airport taxis",
    icon: faTaxi,
    active: false,
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul className={styles["navbar-list"]}>
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <NavbarItem
              key={item.type}
              data={item}
            />
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;
