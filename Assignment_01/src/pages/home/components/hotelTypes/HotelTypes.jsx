import React, { useEffect } from "react";

import styles from "./HotelTypes.module.css";
import HotelTypeBlock from "../../../../components/hotelTypeBlock/HotelTypeBlock.jsx";
import { useDispatch, useSelector } from "react-redux";
import typeApi from "../../../../api/typeApi";
import { typeActions } from "../../../../features/typeSlice";

const HotelTypes = () => {
  const dispatch = useDispatch();

  const types = useSelector((state) => state.type.typeList);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const res = await typeApi.getAll();
        if (res.status === 0) throw new Error(res.message);
        dispatch(typeActions.getAllType(res.result));
      } catch (error) {
        console.log(error);
      }
    };
    fetchTypes();
  }, [dispatch]);
  return (
    <div className={styles["hotel-types"]}>
      <h2 className={styles["hotel-type__title"]}>Browse by property type</h2>
      <ul className={styles["hotel-type__list"]}>
        {types.map((type) => (
          <li className={styles["hotel-type__item"]} key={type.image}>
            <HotelTypeBlock data={type} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelTypes;
