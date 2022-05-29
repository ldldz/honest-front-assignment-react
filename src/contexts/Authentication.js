import { createContext, useState } from 'react';
import { postIdentityAuthentication } from '../api';

export const AuthenticationContext = createContext();

export function AuthenticationProvider({ children }) {
  const [token, setToken] = useState(null);
  const [tokenIssueTime, setTokenIssueTime] = useState(null);
  const [identityData, setIdentityData] = useState({});

  async function setTokenByIdentityData(newIdentityData = identityData) {
    const { response, error } = await postIdentityAuthentication(
      newIdentityData
    );

    if (error) {
      throw new Error('token을 받지 못했습니다.');
    }
    setToken(response.token);
    setTokenIssueTime(new Date());
    setIdentityData(newIdentityData);
    alert('인증번호를 전송하였습니다.');
  }

  const value = { token, tokenIssueTime, identityData, setTokenByIdentityData };
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}
