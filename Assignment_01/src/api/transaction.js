import axiosBooking from "./axios";

const transactionApi = {
  getAll: () => axiosBooking.get("/transaction"),
  createNewTransaction: (transaction) => {
    const url = "/transaction";
    return axiosBooking.post(url, transaction);
  },
  getByHotelId: (hotelId, dateStart, dateEnd) => {
    const url = `/transaction/${hotelId}`;
    return axiosBooking.post(url, { dateStart, dateEnd });
  },
  getTransactionsByUser: (userId) => {
    const url = `/transaction/user/${userId}`;
    return axiosBooking.get(url);
  },
};

export default transactionApi;
