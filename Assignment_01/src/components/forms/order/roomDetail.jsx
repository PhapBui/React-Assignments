import React, { useRef } from "react";
import classes from "./formOrder.module.css";
const RoomDetail = ({ setRoomsOrder, roomData, roomsOrder }) => {
  const handleRoomChange = (e, roomNumber, roomPrice) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      setRoomsOrder((prev) => {
        return [...prev, { roomNumber, roomPrice }];
      });
    } else {
      setRoomsOrder((prev) =>
        prev.filter((item) => item.roomNumber !== roomNumber)
      );
    }
  };

  const inputContainersRef = useRef();
  return (
    <div className={classes["room"]}>
      <h4 className={classes["room__title"]}>{roomData.title}</h4>
      <div>
        <div className={classes["room__detail"]}>
          <p>{roomData.desc}</p>
          <div>
            Max people:<strong> {roomData.maxPeople}</strong>
          </div>
          <div className={classes["price"]}>${roomData.price}</div>
        </div>
        <div className={classes["room__numbers"]} ref={inputContainersRef}>
          {roomData.roomNumbers?.length > 0 ? (
            roomData.roomNumbers.map((number) => (
              <label key={number}>
                {number}
                <input
                  type="checkbox"
                  value={number}
                  onChange={(e) => handleRoomChange(e, number, roomData.price)}
                />
              </label>
            ))
          ) : (
            <>All rooms have been ordered!</>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
