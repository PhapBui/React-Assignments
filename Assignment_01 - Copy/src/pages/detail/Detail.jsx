import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import styles from "./Detail.module.css";
import Button from "../../components/UI/Button.jsx";

const details = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};

const Detail = () => {
  const { photos } = details;
  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "#0071c2",
    borderRadius: "4px",
    border: "none",
    color: "#fff",
    fontWeight: 600,
  };
  return (
    <div>
      <div className={styles["header"]}>
        <div className={styles["header__left"]}>
          <h1>{details.name}</h1>
          <div className={styles["address"]}>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={styles["icon"]}
            />
            <span>{details.address}</span>
          </div>
        </div>
        <div className={styles["header__right"]}>
          <Button
            text={"Reserve or Book Now!"}
            style={buttonStyle}
          />
        </div>
      </div>

      <div className={styles["body"]}>
        <div className={styles["distance"]}>{details.distance}</div>

        <div className={styles["price"]}>{details.price}</div>
        <div className={styles["photos"]}>
          {photos &&
            photos.map((photo) => (
              <div key={photo}>
                <img
                  src={photo}
                  alt={photo}
                />
              </div>
            ))}
        </div>
      </div>
      <div className={styles["footer"]}>
        <div className={styles["footer__left"]}>
          <h3 className={styles["title"]}>{details.title}</h3>
          <div className={styles["description"]}>{details.description}</div>
        </div>
        <div className={styles["footer__right"]}>
          <h3>Perfect for a 9-night stay!</h3>
          <p>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </p>
          <div className={styles["nine_night_price"]}>
            <span className={styles["dollar"]}>
              {" "}
              ${details.nine_night_price}
            </span>{" "}
            <span className={styles["note"]}>(9 nights)</span>
          </div>
          <Button
            text={"Reserve or Book Now!"}
            style={buttonStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
