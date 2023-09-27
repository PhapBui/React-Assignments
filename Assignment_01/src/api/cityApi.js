import axiosBooking from "./axios";

const cityApi = {
  getAll: () => axiosBooking.get("city"),
};

export default cityApi;
