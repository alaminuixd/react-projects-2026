import { useEffect, useState } from "react";
import { addMinutes } from "date-fns";
import { TIMEZONE_OFFSET } from "../constants/timezone";

const useClock = (timezone, offset) => {
  const [localDate, setLocalDate] = useState(null);
  const [localOffset, setLocalOffset] = useState(0);
  const [localTimezone, setLocalTimezone] = useState("");
  const [utc, setUTC] = useState(null);

  useEffect(() => {
    let d = new Date();
    const lo = d.getTimezoneOffset();
    d = addMinutes(d, lo);
    setUTC(d);
    setLocalOffset(lo);
  }, []);

  useEffect(() => {
    if (utc !== null) {
      if (timezone) {
        offset = TIMEZONE_OFFSET[timezone] ?? offset;
        const newUTC = addMinutes(utc, offset);
        setLocalDate(newUTC);
      } else {
        const newUTCE = addMinutes(utc, -localOffset);
        const dateStrArr = newUTCE.toUTCString().split(" ");
        setLocalDate(newUTCE);
        setLocalTimezone(dateStrArr.pop());
        // Todo: find timezone
      }
    }
  }, [utc, timezone, offset]);
  useEffect(() => {
    // console.log("Local Timezone from hook: ", localTimezone);
  }, [localTimezone]);
  return {
    date: localDate,
    dateUtc: utc,
    offset: offset || -localOffset,
    timezone: timezone || localTimezone,
  };
};

export default useClock;
