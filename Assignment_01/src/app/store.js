import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "../features/hotelSlice";
import authReducer from "../features/authSlice";
import cityReducer from "../features/citySlice";
import typeReducer from "../features/typeSlice";
import transactionReducer from "../features/transaction";

const store = configureStore({
  reducer: {
    hotel: hotelReducer,
    auth: authReducer,
    city: cityReducer,
    type: typeReducer,
    transaction: transactionReducer,
  },
});

export default store;
