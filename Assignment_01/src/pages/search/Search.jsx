import React, { useEffect } from "react";
import SearchList from "./components/searchList/SearchList.jsx";
import SearchPopup from "./components/searchPopup/SearchPopup.jsx";

import styles from "./Search.module.css";
import { useDispatch, useSelector } from "react-redux";
import cityApi from "../../api/cityApi.js";
import { cityActions } from "../../features/citySlice.js";

const Search = () => {
  const dispatch = useDispatch();

  const hotels = useSelector((state) => state.hotel.hotelSearch);
  // get all city
  useEffect(() => {
    const fetchCity = async () => {
      try {
        const res = await cityApi.getAll();
        if (res.status === 0) throw new Error(res.message);

        dispatch(cityActions.getAllCity(res.result));
      } catch (error) {
        console.log(error);
      }
    };
    fetchCity();
  }, [dispatch]);
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["sidebar"]}>
        <SearchPopup />
      </div>
      <div className={styles["results"]}>
        <SearchList hotelList={hotels} />
      </div>
    </div>
  );
};

export default Search;
