import { createSlice } from "@reduxjs/toolkit";

const initType = {
  typeList: [],
};

const typeSlice = createSlice({
  name: "type",
  initialState: initType,
  reducers: {
    getAllType: (state, action) => {
      state.typeList = action.payload;
    },
  },
});

export const typeActions = typeSlice.actions;

const typeReducer = typeSlice.reducer;

export default typeReducer;
