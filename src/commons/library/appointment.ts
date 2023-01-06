export const appointment = (value) => {
  const day = value.slice(5, 10) + "일";
  const time = value.slice(11, 16) + "분";
  return day + "  " + time;
};
