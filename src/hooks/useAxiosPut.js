import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosPut = () => {
  const [response, setResponse] = useState(null);
  const [isPutting, setIsPutting] = useState(false);
  const [putError, setPutError] = useState(null);
  const [putData, setPutData] = useState(null);
  const [apiEndpoint, setApiEndpoint] = useState(null);
  const [authorizationToken, setAuthorizationToken] = useState(null);
  const [status, setStatus] = useState(null)


  useEffect(() => {
    let isMounted = true;
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const putDataToServer = async () => {
      try {
        setIsPutting(true);
        const headers = {};

        // Add authorization header if the token is provided
        if (authorizationToken) {
          headers.Authorization = `Bearer ${authorizationToken}`;
        }

        const response = await axios.put(apiEndpoint, putData, {
          cancelToken: source.token,
          headers: headers,
        });
        if (isMounted) {
          setResponse(response.data);
          setPutError(null);
        }
      } catch (error) {
        if (isMounted) {
          setPutError(error.response.data);
          setResponse(null);
          setStatus(error.response.status)
        }
      } finally {
        isMounted && setIsPutting(false);
      }
    };

    if (putData !== null && apiEndpoint !== null) {
      putDataToServer();
    }

    return () => {
      isMounted = false;
      source.cancel("Operation canceled by the user");
    };
  }, [putData, apiEndpoint, authorizationToken]);

  const triggerPut = (data, endpoint, token = null) => {
    setPutData(data);
    setApiEndpoint(endpoint);
    setAuthorizationToken(token);
  };

  return {
    response,
    isPutting,
    putError,
    status,
    triggerPut,
  };
};

export default useAxiosPut;
