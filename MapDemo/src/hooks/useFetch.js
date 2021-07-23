import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

export default url => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const useFetch = useCallback(async () => {
    try {
      const {data: response} = await axios.get(url, {params: {size: 20}});
      setLoading(false);
      setData(response);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }, [url]);

  useEffect(() => useFetch(), [useFetch]);

  return {data, loading, error};
};
