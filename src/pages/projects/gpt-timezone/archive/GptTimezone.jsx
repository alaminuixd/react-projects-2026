import React from "react";
import useClockGpt from "./hooks/useClockGpt";
import { format } from "date-fns";

const GptTimezone = () => {
  const { date, dateUtc, offset, timezone } = useClockGpt({
    timezone: "BST",
    offset: 8,
  });

  console.log(dateUtc);
  return (
    <div className="space-y-2 w-full max-w-2xl mx-auto">
      <h1>Local Clock</h1>
      <h3>{format(date, "hh:mm:ss aaa")}</h3>
      <h3>{format(date, "dd-MMM-yyyy")}</h3>
      <h3>{format(dateUtc, "dd-MMM-yyy hh:mm:ss aaa")}</h3>
    </div>
  );
};

export default GptTimezone;
