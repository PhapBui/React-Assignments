import React from "react";
import CityBlock from "../../../../components/cityBlock/CityBlock.jsx";

import styles from "./Cities.module.css";

const cities = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];
const Cities = () => {
  return (
    <div className={styles["cities"]}>
      {cities.map((city) => (
        <div
          className={styles["city"]}
          key={city.name}
        >
          <CityBlock data={city} />
        </div>
      ))}
    </div>
  );
};

export default Cities;
