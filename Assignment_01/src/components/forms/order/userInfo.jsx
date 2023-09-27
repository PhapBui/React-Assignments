import React from "react";
import classes from "./formOrder.module.css";
const UserInfo = ({ userInfo, setUserInfo }) => {
  const handlerChangeFullName = (e) => {
    setUserInfo((prev) => ({ ...prev, fullName: e.target.value }));
  };
  const handlerChangeEmail = (e) => {};
  const handlerChangePhoneNumber = (e) => {
    setUserInfo((prev) => ({ ...prev, phoneNumber: e.target.value }));
  };
  const handlerChangeCardNumber = (e) => {
    setUserInfo((prev) => ({ ...prev, cardNumber: e.target.value }));
  };
  return (
    <div className={classes["user__info"]}>
      <h3>Reserve Info</h3>
      <div className={classes["full__name"]}>
        <label htmlFor="fullName">Your Full Name:</label>
        <input
          value={userInfo.fullName}
          onChange={handlerChangeFullName}
          placeholder="Full Name"
          id="fullName"
        />
      </div>
      <div className={classes["email"]}>
        <label htmlFor="email">Your Email:</label>
        <input
          style={{ cursor: "no-drop" }}
          value={userInfo.email}
          disabled
          onChange={handlerChangeEmail}
          placeholder="Email"
          id="email"
        />
      </div>
      <div className={classes["phonenumber"]}>
        <label htmlFor="phonenumber">Your Phone Number:</label>
        <input
          value={userInfo.phoneNumber}
          onChange={handlerChangePhoneNumber}
          placeholder="Phone Number"
          id="phonenumber"
        />
      </div>
      <div className={classes["card"]}>
        <label htmlFor="card">Your Identity Card Number:</label>
        <input
          value={userInfo.cardNumber}
          onChange={handlerChangeCardNumber}
          placeholder="Card Number"
          id="card"
        />
      </div>
    </div>
  );
};

export default UserInfo;
