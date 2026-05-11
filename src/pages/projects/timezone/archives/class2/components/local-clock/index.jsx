import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";
import useClock from "../../hooks/useClock";
import "./LocalClock.css";
import { useEffect } from "react";
const LocalClock = ({ clock, updateClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    updateClock({
      title: "My Local Clock",
      date,
      timezone,
      offset,
    });
  }, [date]);

  useEffect(() => {
    console.log("Local Clock: ", timezone);
  }, [timezone]);

  return (
    <div className="single-clock">
      {date ? (
        <ClockDisplay
          date={date}
          title={clock.title}
          timezone={timezone}
          offset={offset}
        />
      ) : (
        <h1>No Local Date found</h1>
      )}
      <ClockActions local={true} clock={clock} updateClock={updateClock} />
    </div>
  );
};

export default LocalClock;
