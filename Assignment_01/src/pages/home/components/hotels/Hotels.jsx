import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import hotelApi from "../../../../api/hotelApi";
import HotelBlock from "../../../../components/hotelBlock/HotelBlock";
import { hotelActions } from "../../../../features/hotelSlice";
import styles from "./Hotels.module.css";
import { Link } from "react-router-dom";

const Hotels = () => {
  const dispatch = useDispatch();

  const hotels = useSelector((state) => state.hotel.hotelList).slice(0, 8);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const res = await hotelApi.getAll();
        if (res.status === 0) throw new Error(res.message);

        dispatch(hotelActions.getAllHotel(res.result));
      } catch (error) {
        console.log(error);
      }
    };
    fetchTypes();
  }, [dispatch]);

  return (
    <div className={styles["hotels"]}>
      <h2 className={styles["hotels__title"]}>Homes guests love</h2>
      <ul className={styles["hotels__list"]}>
        {hotels.map((hotel) => (
          <li className={styles["hotels__item"]} key={hotel._id}>
            <Link to={`detail/${hotel._id}`}>
              <HotelBlock data={hotel} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hotels;
