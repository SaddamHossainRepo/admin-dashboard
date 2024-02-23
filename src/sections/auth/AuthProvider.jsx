// AuthProvider.js

import PropTypes from 'prop-types';
import React, { useMemo, useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    // Perform login logic (e.g., send credentials to the server)
    // If login successful, set loggedIn to true
    setLoggedIn(true);
  };

  const logout = () => {
    // Perform logout logic (e.g., remove token from storage)
    // Set loggedIn to false
    setLoggedIn(false);
  };

  const authContextValue = useMemo(() => ({ loggedIn, login, logout }), [loggedIn]);


  return (
    <AuthContext.Provider value={authContextValue}>
        {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
