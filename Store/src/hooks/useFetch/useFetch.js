import React, {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const resp = await axios.get(url);
      setData(resp.data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {data, isLoading, error};
}

export default useFetch;
