export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const dateConverter = (convertedDate) => {
  const dateObj = new Date(convertedDate);
  const now = new Date();
  const today = now.getDate();
  const yesterday = now.getDate() - 1;
  const sevenDaysAgo = now.getDate() - 7;
  const [day, date, month, year] = [
    dateObj.getDay(),
    dateObj.getDate(),
    dateObj.getMonth(),
    dateObj.getFullYear(),
  ];
  if (year === now.getFullYear()) {
    if (today === date) return "Today";
    if (yesterday === date) return "Yesterday";
    if (sevenDaysAgo <= date) return "Last week";
  }
  return `${days[day]}, ${months[month].slice(0, 3)} ${date}`;
};
