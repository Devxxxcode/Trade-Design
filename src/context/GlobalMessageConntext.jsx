import { createContext, useContext, useState } from 'react';

const GlobalMessageContext = createContext();

export const GlobalMessageProvider = ({ children }) => {
  const [globalResponse, setGlobalResponse] = useState(null);
  const [globalError, setGlobalError] = useState(null);

  const setGlobalMessage = (response, error) => {
    setGlobalResponse(response);
    setGlobalError(error);
  };

  return (
    <GlobalMessageContext.Provider
      value={{
        globalResponse,
        globalError,
        setGlobalMessage,
      }}
    >
      {children}
    </GlobalMessageContext.Provider>
  );
};

export const useGlobalMessage = () => {
  return useContext(GlobalMessageContext);
};
