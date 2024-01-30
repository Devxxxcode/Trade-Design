import { useState, useEffect } from "react";
import axios from "axios";
import { FaBedPulse } from "react-icons/fa6";

const useAxiosFetch = (dataUrl, authToken = null, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [status, setStatus] = useState(null)

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const response = await axios.get(url, {
        headers: {
          Authorization: authToken ? `Bearer ${authToken}` : '',
        },
      });
      setData(response.data);
      setFetchError(null);
      setIsLoading(false)
    } catch (err) {
      setFetchError(err.message);
      setData(initialData);
      setIsLoading(false)
      setStatus(err.response.status)
    }
  };

  const fetchDataTrigger =  async() => {
    await fetchData(dataUrl);
  };

  useEffect(() => {
    let isMounted = true;
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchDataInternal = async () => {
      try {
        await fetchData(dataUrl);
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData(initialData);
          
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchDataInternal();

    return () => {
      isMounted = false;
      source.cancel("Operation cancelled by the user");
    };
  }, [dataUrl, authToken]);

  return {
    data,
    isLoading,
    fetchError,
    status,
    fetchDataTrigger,
  };
};

export default useAxiosFetch;
