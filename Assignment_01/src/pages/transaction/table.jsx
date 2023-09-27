import React from "react";
import dateFormat from "../../utils/dateFormat";
import { Link } from "react-router-dom";

import styles from "./table.module.css";

const Table = ({ tableData }) => {
  return (
    <table className={styles["table"]}>
      <thead className={styles["table__header"]}>
        <tr>
          <th>#</th>
          <th>Hotel</th>
          <th>Room</th>
          <th>Date</th>
          <th>Price</th>
          <th>Payment Method</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className={styles["table__body"]}>
        {tableData.length > 0 ? (
          tableData.map((tran, i) => (
            <tr key={tran._id}>
              <td>{i + 1}</td>
              <td>{tran.hotel[0].name}</td>
              <td>{tran.rooms.join(", ")}</td>
              <td>
                {dateFormat(tran.dateStart)} - {dateFormat(tran.dateEnd)}
              </td>
              <td>${tran.price}</td>
              <td>{tran.payment}</td>
              <td className={styles[tran.status]}>{tran.status}</td>
            </tr>
          ))
        ) : (
          <tr>
            <h4>Your transactions is empy, back to home?</h4>
            <Link to="/">Home</Link>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
