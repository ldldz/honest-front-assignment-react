import { createContext, useState } from 'react';
import { postIdentityAuthentication } from '../api';

export const AuthenticationContext = createContext();

export function AuthenticationProvider({ children }) {
  const [token, setToken] = useState(null);
  const [identityData, setIdentityData] = useState({});

  async function setTokenByIdentityData(newIdentityData = identityData) {
    const { response, error } = await postIdentityAuthentication(
      newIdentityData
    );

    if (error) {
      throw new Error('token을 받지 못했습니다.');
    }
    setToken(response.token);
    setIdentityData(newIdentityData);
  }

  const value = { token, identityData, setTokenByIdentityData };
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}
