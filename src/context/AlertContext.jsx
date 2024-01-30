import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert1, setAlert1] = useState(false);
  const [alert2, setAlert2] = useState(false);
  const [alertInfo1, setAlertInfo1] = useState("");
  const [alertInfo2, setAlertInfo2] = useState("");

  const showAlert1 = (message) => {
    setAlert1(true);
    setAlertInfo1(message);
  };

  const hideAlert1 = () => {
    setAlert1(false);
    setAlertInfo1("");
  };

  const showAlert2 = (message) => {
    setAlert2(true);
    setAlertInfo2(message);
  };

  const hideAlert2 = () => {
    setAlert2(false);
    setAlertInfo2("");
  };

  return (
    <AlertContext.Provider
      value={{
        alert1,
        alertInfo1,
        showAlert1,
        hideAlert1,
        alert2,
        alertInfo2,
        showAlert2,
        hideAlert2,
        setAlert1,
        setAlert2,
        setAlertInfo1,
        setAlertInfo2
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};
