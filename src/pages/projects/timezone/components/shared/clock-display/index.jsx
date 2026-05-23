import { format } from "date-fns";
import { useEffect } from "react";
import "./index.css";
const ClockDisplay = ({ date, title, timezone, offset, timeDistance = "" }) => {
  const offsetHour = offset / 60;
  // const offsetHour = offset;
  // console.log("clock display: ", timezone);
  useEffect(() => {
    // console.log("clock display: ", offsetHour);
  }, [offsetHour]);
  return (
    <div className="clock-display-container">
      <h2>{title}</h2>
      <h3>{format(date, "yyyy-MM-dd hh:mm:ss aa")}</h3>
      <h4>{date.toUTCString()}</h4>
      <p>
        {timezone}
        {offsetHour < 0
          ? ` + ${Math.abs(offsetHour)}`
          : ` - ${Math.abs(offsetHour)}`}
      </p>
      {timeDistance && <h3>{timeDistance} difference</h3>}
    </div>
  );
};
export default ClockDisplay;
