import { format } from "date-fns";
import { useEffect } from "react";
const ClockDisplay = ({ date, title, timezone, offset }) => {
  const offsetHour = offset / 60;
  // const offsetHour = offset;
  // console.log("clock display: ", timezone);
  useEffect(() => {
    console.log("clock display: ", offsetHour);
  }, [offsetHour]);
  return (
    <div>
      <h2>{title}</h2>
      <h3>{format(date, "yyyy-MM-dd hh:mm:ss aa")}</h3>
      <h4>{date.toUTCString()}</h4>
      <p>
        {timezone}
        {offsetHour < 0
          ? ` + ${Math.abs(offsetHour)}`
          : ` - ${Math.abs(offsetHour)}`}
      </p>
    </div>
  );
};
export default ClockDisplay;
