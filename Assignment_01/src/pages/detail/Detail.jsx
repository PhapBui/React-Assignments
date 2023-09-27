import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import styles from "./Detail.module.css";
import Button from "../../components/UI/Button.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import hotelApi from "../../api/hotelApi";
import { hotelActions } from "../../features/hotelSlice";
import FormOrder from "../../components/forms/order/formOrder";
import Section from "../../components/UI/Section";
import transactionApi from "../../api/transaction";

const Detail = () => {
  const [showFormOrder, setShowFormOrder] = useState(false);

  const navigate = useNavigate();

  // redux
  const dispatch = useDispatch();
  // get hotel by id
  const hotelData = useSelector((state) => state.hotel.hotel);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const formRef = useRef();

  // get hotelId from url
  const { hotelId } = useParams();

  // getch hotelById
  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const res = await hotelApi.getById(hotelId);
        if (res.status === 0) throw new Error(res.message);
        dispatch(hotelActions.fetchHotelById(res.result));
      } catch (error) {
        console.log(error);
      }
    };
    fetchHotelData();
  }, [dispatch, hotelId]);

  //
  const { photos } = hotelData;

  // button style
  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "#0071c2",
    borderRadius: "4px",
    border: "none",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
  };

  const handlerOrder = async (data) => {
    try {
      const res = await transactionApi.createNewTransaction(data);
      if (res.status === 0) throw new Error(res.message);
      navigate("/trans");
    } catch (error) {
      console.log(error);
    }
  };
  // scroll to form order
  const handlerShowFormOrder = () => {
    setShowFormOrder((prev) => !prev);
  };
  useEffect(() => {
    if (showFormOrder) formRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [showFormOrder]);
  return (
    <Section>
      <div className={styles["header"]}>
        <div className={styles["header__left"]}>
          <h1>{hotelData.name}</h1>
          <div className={styles["address"]}>
            <FontAwesomeIcon icon={faLocationDot} className={styles["icon"]} />
            <span>{hotelData.address}</span>
          </div>
        </div>
        <div className={styles["header__right"]}>
          <Button
            onClick={handlerShowFormOrder}
            text={"Reserve or Book Now!"}
            style={buttonStyle}
          />
        </div>
      </div>

      <div className={styles["body"]}>
        <div className={styles["distance"]}>
          Excellent location - {hotelData.distance}m from center
        </div>

        <div className={styles["price"]}>
          Book a stay over ${hotelData.cheapestPrice} at this property and get a
          free airport taxi
        </div>
        <div className={styles["photos"]}>
          {photos &&
            photos.map((photo) => (
              <div key={photo}>
                <img src={photo} alt={photo} />
              </div>
            ))}
        </div>
      </div>

      <div className={styles["footer"]}>
        <div className={styles["footer__left"]}>
          <h3 className={styles["title"]}>{hotelData.title}</h3>
          <div className={styles["description"]}>{hotelData.desc}</div>
        </div>
        <div className={styles["footer__right"]}>
          <div className={styles["nine_night_price"]}>
            <span className={styles["dollar"]}>${hotelData.cheapestPrice}</span>
            <span className={styles["note"]}>(1 nights)</span>
          </div>
          <Button
            onClick={handlerShowFormOrder}
            text={"Reserve or Book Now!"}
            style={buttonStyle}
          />
        </div>
      </div>

      {showFormOrder &&
        (isLoggedIn ? (
          <FormOrder onSubmit={handlerOrder} hotelId={hotelId} ref={formRef} />
        ) : (
          <div
            style={{
              textAlign: "center",
              marginTop: 20,
              backgroundColor: "#ccc",
              padding: 12,
            }}
          >
            <h4>You need login for order</h4>
            <Link to="/login">Login</Link>
          </div>
        ))}
    </Section>
  );
};

export default Detail;
