import React, { useState } from "react";

import "./TimeZone.css";
import LocalClock from "./components/local-clock";
import ClockList from "./components/clock-list";
import useClock from "./hooks/useClock";

const LOCAL_CLOCK_INIT = {
  title: "",
  timezone: "",
  offset: 0,
  date: null,
};

const TimeZone = () => {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });

  const updateLocalClock = (data) => {
    setLocalClock((prev) => ({
      ...prev,
      ...data,
    }));
  };
  // const { date: localDate, localOffset, localTimezone } = useClock();

  return (
    <div className="timezone-container">
      {localClock !== null && (
        <LocalClock clock={localClock} updateClock={updateLocalClock} />
      )}

      <ClockList clock={localClock} updateClock={updateLocalClock} />
    </div>
  );
};

export default TimeZone;
