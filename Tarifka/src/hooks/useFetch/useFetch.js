import React, {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const resp = await axios.get(url);
      setData(resp.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {data, loading, error};
}

export default useFetch;
