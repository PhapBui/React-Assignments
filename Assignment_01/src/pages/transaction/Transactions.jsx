import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import transactionApi from "../../api/transaction";
import Section from "../../components/UI/Section";
import Navbar from "../../components/navbar/Navbar";
import { transactionActions } from "../../features/transaction";
import Table from "./table";

const Transactions = () => {
  const dispatch = useDispatch();
  //get check user login
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const transactionList = useSelector(
    (state) => state.transaction.transactionList
  );

  useEffect(() => {
    const fetchALlTransaction = async () => {
      try {
        const res = await transactionApi.getTransactionsByUser(user._id);

        if (res.status === 0) throw new Error(res.message);

        dispatch(transactionActions.getTransactionsByUser(res.result));
      } catch (error) {
        console.log(error);
      }
    };
    if (user._id) {
      fetchALlTransaction();
    }
  }, [user, dispatch]);

  //get all transactionByUsername or userId

  const navigate = useNavigate();

  //redirect if isLoggedIn =false
  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <Section style={{ backgroundColor: "#003580" }}>
        <Navbar />
      </Section>
      <Section>
        <h3>Your Transactions</h3>
        <Table tableData={transactionList} />
      </Section>
    </div>
  );
};

export default Transactions;
