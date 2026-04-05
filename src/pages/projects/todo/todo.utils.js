/* 
This one is better
export const getDay = (dateStr) => {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
  });
};
 */
// following one is self built without using ".toLocalDateString"
export const getDay2 = (dateStr) => {
  const date = new Date(dateStr).getDay();
  switch (date) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      throw new Error("Invalid Date");
  }
};

// another way using array
export const getDay = (dateStr) => {
  const date = new Date(dateStr).getDay();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayNames[date];
};

export const formatDate = (dateStr) => {
  const date = new Date(dateStr);

  // Check for invalid date
  if (isNaN(date)) return "Invalid date";

  // Format options
  const options = {
    weekday: "long", // "Monday"
    year: "numeric", // "2026"
    month: "short", // "Apr"
    day: "numeric", // "4"
  };

  return date.toLocaleDateString("en-US", options);
};

export const formatDate2 = (dateStr, separator = ", ") => {
  const date = new Date(dateStr);

  if (isNaN(date)) return "Invalid date";

  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();

  // Combine with custom separator
  return [weekday, month + " " + day, year].join(separator);
};
