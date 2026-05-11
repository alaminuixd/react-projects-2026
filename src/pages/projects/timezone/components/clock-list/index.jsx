import useClock from "../../hooks/useClock";
import ClockDisplay from "../shared/clock-display";

const ClockList = ({ clock, updateClock }) => {
  const { date: putlicDate, timezone, offset } = useClock("EST");
  return (
    <div>
      <h1 className="mb-5">Clock List</h1>
      {putlicDate && (
        <ClockDisplay
          date={putlicDate}
          title={"Public Eastern Time Clock"}
          timezone={timezone}
          offset={offset}
        />
      )}
    </div>
  );
};
export default ClockList;
