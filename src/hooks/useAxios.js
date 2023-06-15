import axios from "axios";
import { useEffect, useState } from "react";
import uuid from "uuid";
const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addData = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        const newData = { ...response.data, id: uuid() };
        addData(newData);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error, addData };
};

export default useAxios;