import axios from 'axios';
import {useState} from 'react';

function usePost() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const post = async (url, values) => {
    setIsLoading(true);
    try {
      const {data: responseData} = await axios.post(url, values);
      setData(responseData);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  return {data, isLoading, error, post};
}

export default usePost;
