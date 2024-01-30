import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('accessToken') || null);
  const navigate = useNavigate();

  const login = (newToken) => {
    setToken(token=>newToken);
    // Store the token in localStorage
    localStorage.setItem('accessToken', newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('accessToken');
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
