import { createSlice } from "@reduxjs/toolkit";

const initTransaction = {
  transactionList: [],
  transaction: {},
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState: initTransaction,
  reducers: {
    getAllTransaction: (state, action) => {
      state.transactionList = action.payload;
    },
    fetchTransactionById: (state, action) => {
      state.transaction = action.payload;
    },
    getTransactionsByUser: (state, action) => {
      state.transactionList = action.payload;
    },
  },
});

export const transactionActions = transactionSlice.actions;

const transactionReducer = transactionSlice.reducer;

export default transactionReducer;
