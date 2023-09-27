import { addDays } from "date-fns";
import React, { useEffect, useState, forwardRef } from "react";
import { DateRange } from "react-date-range";

import classes from "./formOrder.module.css";
import RoomDetail from "./roomDetail";
import UserInfo from "./userInfo";
import { useDispatch, useSelector } from "react-redux";
import { selectRoomType } from "../../../features/hotelSlice";
import transactionApi from "../../../api/transaction";
import { getNumberOfDay } from "../../../utils/getNumberOfDay";
import { convertPriceOrder } from "../../../utils/convertPriceOrder";

const FormOrder = forwardRef(({ onSubmit, hotelId }, ref) => {
  // init state
  const [dateOrder, setDateOrder] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 2),
      key: "selection",
    },
  ]);

  const user = useSelector((state) => state.auth.user);

  const [userInfo, setUserInfo] = useState(user);
  const [roomsOrder, setRoomsOrder] = useState([]);
  const [payment, setPayment] = useState("");
  const [roomsOrdered, setRoomsOrdered] = useState([]);

  //get rooms type
  const rooms = useSelector(selectRoomType);
  // filter room ordered
  const roomsEmpty = rooms?.map((room) => {
    if (!roomsOrdered) return room;

    const newRoom = { ...room };
    newRoom.roomNumbers = newRoom.roomNumbers?.filter(
      (number) => !roomsOrdered.includes(number)
    );
    return newRoom;
  });
  //   dispatch
  const dispatch = useDispatch();

  //   get date order
  const handleDateChange = (item) => {
    setDateOrder([item.selection]);
  };

  useEffect(() => {
    setRoomsOrder([]);
    const fetchRoomsOrdered = async () => {
      try {
        const dateStart = dateOrder[0].startDate;
        const dateEnd = dateOrder[0].endDate;
        const res = await transactionApi.getByHotelId(
          hotelId,
          dateStart,
          dateEnd
        );
        if (res.status === 0) throw new Error(res.message);
        setRoomsOrdered((prev) => res.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRoomsOrdered();
  }, [dispatch, dateOrder, hotelId]);

  //   get Payment method
  const handlerChangePaymentMethod = (e) => {
    setPayment((prev) => e.target.value);
  };

  //   Submit form
  const handlerFormSubmit = (e) => {
    e.preventDefault();

    // get number of day

    const { numberOfDay, dateStart, dateEnd } = getNumberOfDay(dateOrder);

    //get list room and price
    const { price, rooms } = convertPriceOrder(roomsOrder);

    const transaction = {
      dateStart,
      dateEnd,
      user: userInfo,
      rooms: rooms,
      payment,
      status: "Booked",
      price: price * numberOfDay,
      hotelId,
    };
    onSubmit(transaction);
  };
  return (
    <form
      className={classes["form-control"]}
      onSubmit={handlerFormSubmit}
      ref={ref}
    >
      <div className={classes["row"]}>
        <div className={classes["date"]}>
          <h3>Date</h3>
          <DateRange
            onChange={(item) => handleDateChange(item)}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            minDate={new Date()}
            months={1}
            ranges={dateOrder}
            direction="horizontal"
          />
        </div>
        <UserInfo setUserInfo={setUserInfo} userInfo={userInfo} />
      </div>
      <div className={classes["select__rooms"]}>
        <h3>Select Room</h3>
        <div className={classes["room__list"]}>
          {roomsEmpty?.length > 0 &&
            roomsEmpty?.map((room) => (
              <div key={room._id} className={classes["room__item"]}>
                <RoomDetail
                  key={room._id}
                  roomData={room}
                  roomsOrder={roomsOrder}
                  setRoomsOrder={setRoomsOrder}
                />
              </div>
            ))}
        </div>
      </div>
      <div className={classes["form__submit"]}>
        <h3>
          Total Bill :$
          {convertPriceOrder(roomsOrder).price *
            getNumberOfDay(dateOrder).numberOfDay}
        </h3>
        <select onChange={handlerChangePaymentMethod} defaultValue="">
          <option value="" disabled>
            Select Payment Method
          </option>
          <option value="Cash">Cash</option>
          <option value="Credit Card">Credit Card</option>
        </select>
        <input
          className={classes["form__submit_btn"]}
          type="submit"
          value="Reserve Now"
        />
      </div>
    </form>
  );
});

export default FormOrder;
