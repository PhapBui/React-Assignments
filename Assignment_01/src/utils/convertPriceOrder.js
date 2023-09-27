export const convertPriceOrder = (orders) => {
  const { price, rooms } = orders.reduce(
    (a, b) => {
      a.price += b.roomPrice;
      a.rooms.push(b.roomNumber);
      return a;
    },
    { price: 0, rooms: [] }
  );
  return { price, rooms };
};
