import { createContext, useState } from 'react';

export const AuthenticationContext = createContext();

export function AuthenticationProvider({ children }) {
  // TODO: useReducer로 변경
  const [token, setToken] = useState(null);
  const [identityData, setIdentityData] = useState({});

  const value = { token, identityData, setToken, setIdentityData };
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}
