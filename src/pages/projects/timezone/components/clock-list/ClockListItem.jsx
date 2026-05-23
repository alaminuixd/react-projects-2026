import React from "react";
import { formatDistance } from "date-fns";
import ClockDisplay from "../shared/clock-display";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";

const ClockListItem = ({ clock, localClock, updateClock, deleteClock }) => {
  const { date } = useClock(clock?.timezone, clock?.offset);

  // console.log("clock list item: ", clock);
  if (!date) return;
  return (
    <div>
      <ClockDisplay
        date={date}
        title={clock?.title}
        timezone={clock?.timezone}
        offset={clock?.offset}
        timeDistance={formatDistance(localClock.date, date)}
      />
      <ClockActions
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
        // createClock={createClock}
      />
    </div>
  );
};

export default ClockListItem;
