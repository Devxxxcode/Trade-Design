import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import useAxiosFetch from '../hooks/useAxiosFetch';
import { apiUrl } from '../apiConfig';

const UserAccountContext = createContext();

export const UserAccountProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [account, setAccount] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Added isLoading state
  const { token } = useAuth();

  const { data: userData, isLoading: userIsLoading, fetchError: userFetchError,status:userStatus, fetchDataTrigger: refetchUser } = useAxiosFetch(
    `${apiUrl}/auth/user/`,
    token,
    {}
  );
  const { data: accountData, isLoading: accountIsLoading, fetchError: accountFetchError, fetchDataTrigger: refetchAccount } = useAxiosFetch(
    `${apiUrl}/account/`,
    token,
    {}
  );

  const isEmpty = (obj) => {
    return Object.entries(obj).length === 0;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (!isEmpty(userData) && !userFetchError) {
          setUser(userData);
          setIsLoading(false);
        }
        if (isEmpty(userData) && userFetchError) {
            setIsLoading(false);
          if (userStatus === 403){
            navigate("/home")
          }
        }
      } catch (error) {
        console.error('Error during user data fetch:', error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [userData, userFetchError, userIsLoading, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (!isEmpty(accountData) && !accountFetchError) {
          setAccount(accountData);
          setIsLoading(false);
        }
        if (isEmpty(accountData) && accountFetchError) {
        setIsLoading(false);
        if (userStatus === 403){
          navigate("/home")
        }
        }
      } catch (error) {
        console.error('Error during account data fetch:', error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [accountData, accountFetchError, accountIsLoading, navigate]);

  const refetchUserAccount = async () => {
    try {
      setIsLoading(true);
      await refetchUser();
      await refetchAccount();
    } catch (error) {
      console.error('Error during refetch:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <UserAccountContext.Provider value={{ user, account, isLoading,setIsLoading, refetchUserAccount }}>
      {children}
    </UserAccountContext.Provider>
  );
};

export const useUserAccount = () => {
  return useContext(UserAccountContext);
};
