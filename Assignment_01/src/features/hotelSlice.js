import { createSelector, createSlice } from "@reduxjs/toolkit";

const initHotel = {
  hotelList: [],
  hotel: {},
  hotelSearch: [],
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState: initHotel,
  reducers: {
    getAllHotel: (state, action) => {
      state.hotelList = action.payload;
    },
    fetchHotelById: (state, action) => {
      state.hotel = action.payload;
    },
    filteredHotel: (state, action) => {
      state.hotelSearch = action.payload;
    },
  },
});

export const hotelActions = hotelSlice.actions;

// custom selector
const selectHotel = (state) => state.hotel.hotel;

export const selectRoomType = createSelector(
  selectHotel,
  (hotel) => hotel.rooms
);

const hotelReducer = hotelSlice.reducer;

export default hotelReducer;
