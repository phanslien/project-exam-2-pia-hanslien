import { useEffect, useState } from "react";

const FetchProducts = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchingData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchingData();
  }, [url]);

  return [loading, error, data];
};

export default FetchProducts;
