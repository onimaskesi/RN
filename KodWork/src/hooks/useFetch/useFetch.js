import React, {useState} from 'react';
import axios from 'axios';

function useFetch() {
  const [data, setData] = useState();
  const [isLoading, setIsLaoding] = useState(true);
  const [error, setError] = useState();

  const fetchData = async (url, params) => {

    try {
      const {data: responseData} = await axios.get(url, {params});
      setIsLaoding(false);
      setData(responseData);
    } catch (err) {
      setIsLaoding(false);
      setError(err);
    }
  };

  return {data, isLoading, error, fetchData};
}

export default useFetch;
