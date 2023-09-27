import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendar, faFemale } from "@fortawesome/free-solid-svg-icons";

import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";
import Select from "react-select";

import styles from "./Search.module.css";

import { useOutsideAlerter } from "../hooks/use-click-outside";
import { useDispatch, useSelector } from "react-redux";
import { cityActions, selectCityOption } from "../../features/citySlice";
import cityApi from "../../api/cityApi";
import { useNavigate } from "react-router-dom";
import hotelApi from "../../api/hotelApi";
import { hotelActions } from "../../features/hotelSlice";

const opts = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

const Search = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);
  const [isShow, setIsShow] = useState(false);
  const [citySearch, setCitySearch] = useState();
  const cityList = useSelector(selectCityOption);

  const dateRangeRef = useRef(null);
  const navigate = useNavigate();

  // ref room/max-people/room
  const roomRef = useRef();
  const maxPeopleRef = useRef();

  // set state when click outside react date range
  useOutsideAlerter(dateRangeRef, setIsShow);

  // handler date
  const handleDateChange = (item) => {
    setState([item.selection]);
  };

  //get date start-end
  const { startDate, endDate } = state[0];

  // get city list

  const dispatch = useDispatch();

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

  //handler change city
  const handlerChangeCity = (city) => {
    setCitySearch(city);
  };

  // submit and redirect
  const handlerFormSearch = async (e) => {
    e.preventDefault();

    const room = +roomRef.current.value;
    const maxPeople = +maxPeopleRef.current.value;
    const city = citySearch?.label;
    if (!room | !maxPeople | !city) {
      navigate("/search");
      return;
    }
    try {
      const res = await hotelApi.filteredHotel(
        city,
        startDate,
        endDate,
        room,
        maxPeople
      );

      if (res.status === 0) throw new Error(res.message);
      dispatch(hotelActions.filteredHotel(res.result));
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles["search"]} onSubmit={handlerFormSearch}>
      {/* Location */}
      <label className={styles["search__label"]} htmlFor="location">
        <FontAwesomeIcon icon={faBed} className={styles["search__icon"]} />
        <Select
          className={styles["select__city"]}
          value={citySearch}
          onChange={handlerChangeCity}
          placeholder={"Select city..."}
          options={cityList}
        />
      </label>

      {/* Calendar */}
      <label className={styles["search__label"]} htmlFor="calendar">
        <FontAwesomeIcon icon={faCalendar} className={styles["search__icon"]} />
        <input
          type="text"
          id="calendar"
          onClick={() => setIsShow(true)}
          placeholder={`${new Date(startDate).toLocaleDateString(
            "en",
            opts
          )} to ${new Date(endDate).toLocaleDateString("en", opts)}`}
          className={styles["search__input"]}
        />
        {isShow && (
          <div className={styles["date-picker"]} ref={dateRangeRef}>
            <DateRange
              onChange={(item) => handleDateChange(item)}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              minDate={new Date()}
              startDate={state[0].startDate}
              endDate={state[0].endDate}
              months={1}
              ranges={state}
              direction="horizontal"
            />
          </div>
        )}
      </label>

      {/* Peoples */}
      <label className={styles["search__label"]} htmlFor="peoples">
        <FontAwesomeIcon icon={faFemale} className={styles["search__icon"]} />
        <input
          type="number"
          id="peoples"
          ref={roomRef}
          placeholder="rooms"
          className={styles["search__input"]}
        />
        <input
          type="number"
          id="peoples"
          ref={maxPeopleRef}
          placeholder="max people/room"
          className={styles["search__input"]}
        />
      </label>

      {/* Submit */}
      <input
        className={styles["search__submit"]}
        type="submit"
        value="Search"
      />
    </form>
  );
};

export default Search;
