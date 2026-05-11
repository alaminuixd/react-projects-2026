import React from "react";

import useClockGpt from "./hooks/useClockGpt";
import { format } from "date-fns";

const GptTimezone = () => {
  const { date, utcDate, offset, timezone } = useClockGpt({ timezone: "PST" });
  console.log("Date: ", date);
  console.log("utcDate: ", utcDate);
  console.log("Offset: ", offset);
  console.log("Timezone: ", timezone);
  return <div className="space-y-2 w-full max-w-2xl mx-auto"></div>;
};

export default GptTimezone;
