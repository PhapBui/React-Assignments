import axiosBooking from "./axios";

const typeApi = {
  getAll: () => axiosBooking.get("type"),
};

export default typeApi;
