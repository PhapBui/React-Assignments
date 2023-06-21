import React from "react";
import styles from "./Hotels.module.css";
import HotelBlock from "../../../../components/hotelBlock/HotelBlock";

const hotels = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

const Hotels = () => {
  return (
    <div className={styles["hotels"]}>
      <h2 className={styles["hotels__title"]}>Homes guests love</h2>
      <ul className={styles["hotels__list"]}>
        {hotels.map((hotel) => (
          <li
            className={styles["hotels__item"]}
            key={hotel.image_url}
          >
            <HotelBlock data={hotel} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hotels;
