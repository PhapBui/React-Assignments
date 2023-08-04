import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "../../image/SearchIcon.jsx";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    function handlerBackgroundColor() {
      window.scrollY > 100 ? setFixed(true) : setFixed(false);
    }
    window.removeEventListener("scroll", handlerBackgroundColor);
    window.addEventListener("scroll", handlerBackgroundColor, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handlerBackgroundColor);
  }, []);
  return (
    <div className={`${classes.navbar} ${fixed && classes.fixed} `}>
      <Link
        className={classes.logo}
        to="/"
      >
        Movie App
      </Link>
      <Link
        to="/search"
        className={classes.search}
      >
        <SearchIcon />
      </Link>
    </div>
  );
};

export default NavBar;
