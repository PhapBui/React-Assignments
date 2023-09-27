import axiosBooking from "./axios";

const hotelApi = {
  getAll: () => axiosBooking.get("hotel"),
  getById: (hotelId) => axiosBooking.get(`hotel/${hotelId}`),
  filteredHotel: (city, dateStart, dateEnd, maxPeople, number) => {
    const url = `/hotel/search`;
    return axiosBooking.post(url, {
      city,
      dateStart,
      dateEnd,
      maxPeople,
      number,
    });
  },
};

export default hotelApi;
