import React, { useRef } from "react";

import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import Select from "react-select";

import { useOutsideAlerter } from "../../../../components/hooks/use-click-outside";
import styles from "./SearchPopup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCityOption } from "../../../../features/citySlice";
import hotelApi from "../../../../api/hotelApi";
import { hotelActions } from "../../../../features/hotelSlice";

const opts = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

const SearchPopup = () => {
  const [isShow, setIsShow] = useState(false);
  const [citySearch, setCitySearch] = useState();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);
  // date ref
  const dateRangeRef = useRef(null);
  // ref room/max-people/room
  const roomRef = useRef();
  const maxPeopleRef = useRef();

  // set state when click outside react date range
  useOutsideAlerter(dateRangeRef, setIsShow);

  //redux
  const dispatch = useDispatch();

  const cityList = useSelector(selectCityOption);

  //get date start-end
  const { startDate, endDate } = state[0];
  //handler change city
  const handlerChangeCity = (city) => {
    setCitySearch(city);
  };
  // handler date
  const handleDateChange = (item) => {
    setState([item.selection]);
  };

  // handler form submit
  const handlerFormSearch = async (e) => {
    e.preventDefault();

    const room = +roomRef.current.value;
    const maxPeople = +maxPeopleRef.current.value;
    const city = citySearch?.label;
    if (!room | !maxPeople | !city) {
      alert("please enter options");
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles["search-form"]} onSubmit={handlerFormSearch}>
      <h2 className={styles["search-form__title"]}>Search</h2>
      <div className={styles["search-form__required"]}>
        <label htmlFor="destination">
          <h3 className={styles["search-form__sub-title"]}>City</h3>
          <Select
            className={styles["select__city"]}
            value={citySearch}
            onChange={handlerChangeCity}
            placeholder={"Select city..."}
            options={cityList}
          />
        </label>
        <label className={styles["search__label"]} htmlFor="calendar">
          <h3 className={styles["search-form__sub-title"]}>Check-in Date</h3>
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
      </div>

      <div className={styles["search-form__options"]}>
        <h3 className={styles["search-form__sub-title"]}>Options</h3>
        <label htmlFor="min-price">
          Number of Room
          <input
            type="number"
            id="peoples"
            ref={roomRef}
            className={styles["search__input"]}
          />
        </label>

        <label htmlFor="max-price">
          Max People per Room
          <input
            type="number"
            id="peoples"
            ref={maxPeopleRef}
            className={styles["search__input"]}
          />
        </label>
      </div>
      <input
        type="submit"
        value="Search"
        className={styles["search-form__submit"]}
      />
    </form>
  );
};

export default SearchPopup;
