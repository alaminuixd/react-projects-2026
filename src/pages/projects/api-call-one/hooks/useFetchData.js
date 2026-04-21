import { useState, useEffect } from "react";
const useFetchData = (url, cb) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // fetching functions
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const result = await res.json();
      if (cb) {
        // we will cook the reslut/ json extrected data into the callback
        setData(cb(result));
      } else {
        setData(result);
      }
      setLoading(false);
      setError("");
    } catch (error) {
      setLoading(false);
      setError("Server error occurred fetching data");
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    // console.log(data);
  }, [data]);

  return { data, loading, error };
};

export default useFetchData;
