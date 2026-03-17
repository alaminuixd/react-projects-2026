import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intv = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intv);
  }, []);
  return (
    <div>
      <h1>Digital Clock</h1>
      <h1>
        {String(time.getHours()).padStart(2, "0")}:
        {String(time.getMinutes()).padStart(2, "0")}:
        {String(time.getSeconds()).padStart(2, "0")}
      </h1>
    </div>
  );
};

export default Clock;
/* const Clock = () => {
  const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);
  const [second, setSecond] = useState(null);
  useEffect(() => {
    setInterval(() => {
      setHour(new Date().getHours().toLocaleString());
      setMinute(new Date().getMinutes().toLocaleString());
      setSecond(new Date().getSeconds().toLocaleString());
    }, 1000);
  }, [hour, minute, second]);
  return (
    <div>
      <h1>Digital Clock</h1>
      <h1>
        {hour}: {minute}: {second}
      </h1>
    </div>
  );
};

export default Clock; */
