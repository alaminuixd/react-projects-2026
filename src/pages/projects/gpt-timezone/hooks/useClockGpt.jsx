import { addMinutes } from "date-fns";
import { useEffect, useMemo, useState } from "react";

const PUBLIC_TIMEZONE_OFFSET = {
  PST: -8 * 60,
  PDT: -7 * 60,
  MST: -7 * 60,
  MDT: -6 * 60,
  EST: -5 * 60,
  EDT: -4 * 60,
  BST: 1 * 60,
};

const useClockGpt = ({ timezone, offset } = {}) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const localOffset = useMemo(() => {
    return -now.getTimezoneOffset();
  }, [now]);

  const finalOffset = useMemo(() => {
    if (timezone && PUBLIC_TIMEZONE_OFFSET[timezone] !== undefined) {
      return PUBLIC_TIMEZONE_OFFSET[timezone];
    }
    return offset ?? localOffset;
  }, [timezone, offset, localOffset]);

  const date = useMemo(() => {
    const utcDate = addMinutes(now, now.getTimezoneOffset());
    return addMinutes(utcDate, finalOffset);
  }, [now, finalOffset]);

  const detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return {
    date,
    utcDate: now,
    offset: finalOffset,
    timezone: timezone || detectedTimezone,
  };
};

export default useClockGpt;
