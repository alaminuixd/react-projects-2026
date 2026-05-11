import { useEffect, useMemo, useState } from "react";
import { addMinutes } from "date-fns";

const TIMEZONE_OFFSET = {
  PST: -8 * 60,
  PDT: -7 * 60,
  MST: -7 * 60,
  MDT: -6 * 60,
  EST: -5 * 60,
  EDT: -4 * 60,
  BST: 1 * 60,
};

const useClockGpt = ({ timezone, offset }) => {
  const [now, setNow] = useState(new Date());

  // Tick every second
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // User's local offset in minutes
  const localOffset = useMemo(() => {
    return -now.getTimezoneOffset();
  }, [now]);

  // Final offset to use
  const finalOffset = useMemo(() => {
    if (timezone && TIMEZONE_OFFSET[timezone] !== undefined) {
      return TIMEZONE_OFFSET[timezone];
    }

    return offset ?? localOffset;
  }, [timezone, offset, localOffset]);

  // Convert current UTC time to target timezone
  const date = useMemo(() => {
    const utcDate = addMinutes(now, now.getTimezoneOffset());
    return addMinutes(utcDate, finalOffset);
  }, [now, finalOffset]);

  const detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return {
    date,
    dateUtc: now,
    offset: finalOffset,
    timezone: timezone ?? detectedTimezone,
  };
};

export default useClockGpt;
