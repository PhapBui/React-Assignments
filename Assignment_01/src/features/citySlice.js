import { createSelector, createSlice } from "@reduxjs/toolkit";

const initCity = {
  cityList: [],
};

const citySlice = createSlice({
  name: "city",
  initialState: initCity,
  reducers: {
    getAllCity: (state, action) => {
      state.cityList = action.payload;
    },
  },
});

export const cityActions = citySlice.actions;

// custome selector
const selectCityList = (state) => state.city.cityList;

export const selectCityOption = createSelector(selectCityList, (cityList) => {
  return cityList.map((city) => ({
    label: city.name,
    value: city._id,
  }));
});

const cityReducer = citySlice.reducer;

export default cityReducer;
