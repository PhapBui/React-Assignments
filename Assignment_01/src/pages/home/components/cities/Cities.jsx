import React, { useEffect } from "react";
import CityBlock from "../../../../components/cityBlock/CityBlock.jsx";

import styles from "./Cities.module.css";
import { useDispatch, useSelector } from "react-redux";
import cityApi from "../../../../api/cityApi.js";
import { cityActions } from "../../../../features/citySlice.js";

const Cities = () => {
  const dispatch = useDispatch();

  const cities = useSelector((state) => state.city.cityList);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const res = await cityApi.getAll();
        if (res.status === 0) throw new Error(res.message);

        dispatch(cityActions.getAllCity(res.result));
      } catch (error) {}
    };
    fetchCity();
  }, [dispatch]);

  return (
    <div className={styles["cities"]}>
      {cities.map((city) => (
        <div className={styles["city"]} key={city._id}>
          <CityBlock data={city} />
        </div>
      ))}
    </div>
  );
};

export default Cities;
