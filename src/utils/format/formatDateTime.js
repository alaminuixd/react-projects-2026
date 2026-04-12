const formatDateTime = (isoString) => {
  const date = new Date(isoString);

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // convert to 12-hour format
  hours = hours % 12 || 12;

  // add leading zeros
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${formattedHours}:${formattedMinutes} ${ampm} - ${month}/${String(day).padStart(2, "0")}/${year}`;
};

export default formatDateTime;
