import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosPost = () => {
  const [response, setResponse] = useState(null);
  const [isPosting, setIsPosting] = useState(false);
  const [postError, setPostError] = useState(null);
  const [postData, setPostData] = useState(null);
  const [apiEndpoint, setApiEndpoint] = useState(null);
  const [authorizationToken, setAuthorizationToken] = useState(null);
  const [status, setStatus] = useState(null)

  useEffect(() => {
    let isMounted = true;
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const postDataToServer = async () => {
      try {
        setIsPosting(true);
        const headers = {};
        
        // Add authorization header if the token is provided
        if (authorizationToken) {
          headers.Authorization = `Bearer ${authorizationToken}`;
        }

        const response = await axios.post(apiEndpoint, postData, {
          cancelToken: source.token,
          headers: headers,
        });
        if (isMounted) {
          setResponse(response.data);
          setPostError(null);
        }
      } catch (error) {
        if (isMounted) {
          setPostError(error.response.data);
          setResponse(null);
          setStatus(error.response)
        }
      } finally {
        isMounted && setIsPosting(false);
      }
    };

    if (postData !== null && apiEndpoint !== null) {
      postDataToServer();
    }

    return () => {
      isMounted = false;
      source.cancel("Operation canceled by the user");
    };
  }, [postData, apiEndpoint, authorizationToken]);

  const triggerPost = (data, endpoint, token = null) => {
    setPostData(data);
    setApiEndpoint(endpoint);
    setAuthorizationToken(token);
  };

  return {
    response,
    isPosting,
    postError,
    status,
    triggerPost,
  };
};

export default useAxiosPost;
