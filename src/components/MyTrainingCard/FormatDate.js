const formatDate = (date) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = monthNames[newDate.getMonth()];
  const year = newDate.getFullYear();
  const hour = (newDate.getHours() < 10 ? "0" : "") + newDate.getHours();
  const minute = (newDate.getMinutes() < 10 ? "0" : "") + newDate.getMinutes();
  const dateToday = day + " " + month + " " + year + ", " + hour + ":" + minute;
  return dateToday;
};

const formatEndDate = (endDate) => {
  const newDate = new Date(endDate);
  const hour = (newDate.getHours() < 10 ? "0" : "") + newDate.getHours();
  const minute = (newDate.getMinutes() < 10 ? "0" : "") + newDate.getMinutes();
  const clockToday = hour + ":" + minute;
  return clockToday;
};

export { formatDate, formatEndDate };
