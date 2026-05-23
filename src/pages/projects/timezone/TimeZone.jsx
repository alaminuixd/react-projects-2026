import React, { useCallback, useEffect, useState } from "react";

import "./TimeZone.css";
import LocalClock from "./components/local-clock";
import ClockList from "./components/clock-list";
import { v4 as uuidv4 } from "uuid";

const LOCAL_CLOCK_INIT = {
  id: uuidv4(),
  title: "",
  timezone: "",
  offset: 0,
  date: null,
};

const TimeZone = () => {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);

  const updateLocalClock = (data) => {
    setLocalClock((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const updateListClock = (updatedClock) => {
    const updatedClocks = clocks.map((clock) => {
      if (clock?.id === updatedClock?.id) {
        return updatedClock;
      }
      return clock;
    });
    console.log("updated clocks: ", updatedClocks);
    setClocks(updatedClocks);
  };

  const deleteClock = (id) => {
    setClocks((prev) => {
      return prev.filter((clock) => clock.id !== id);
    });
  };

  useEffect(() => {
    console.log(clocks);
  }, [clocks]);

  // create clock using data lifted from clock action
  const createClock = (clock) => {
    clock.id = uuidv4();
    setClocks((prev) => [...prev, clock]);
  };

  // const { date: localDate, localOffset, localTimezone } = useClock();

  return (
    <div className="timezone-container">
      {localClock !== null && (
        <LocalClock
          clock={localClock}
          updateClock={updateLocalClock}
          createClock={createClock}
        />
      )}

      <ClockList
        localClock={localClock}
        clocks={clocks}
        updateClock={updateListClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

export default TimeZone;
