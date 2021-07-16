import React, {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  async function fetchData() {
    setIsLoading(true);
    try {
      const resp = await axios.get(url);
      setData(resp.data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {data, isLoading, error};
}

export default useFetch;
