import React from "react";

import styles from "./HotelTypes.module.css";
import HotelTypeBlock from "../../../../components/hotelTypeBlock/HotelTypeBlock.jsx";

const types = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

const HotelTypes = () => {
  return (
    <div className={styles["hotel-types"]}>
      <h2 className={styles["hotel-type__title"]}>Browse by property type</h2>
      <ul className={styles["hotel-type__list"]}>
        {types.map((type) => (
          <li
            className={styles["hotel-type__item"]}
            key={type.image}
          >
            <HotelTypeBlock data={type} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelTypes;
