import axiosBooking from "./axios";

const authApi = {
  signup: (user) => axiosBooking.post("signup", user),
  login: (user) => axiosBooking.post("login", user),
};

export default authApi;
