// react date range
export const getNumberOfDay = (dateOrder) => {
  const dateStart = dateOrder[0].startDate;
  const dateEnd = dateOrder[0].endDate;
  const one_day = 1000 * 60 * 60 * 24;
  const numberOfDay = (dateEnd - dateStart) / one_day;
  return { numberOfDay, dateStart, dateEnd };
};
