import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { AuthenticationContext } from '../contexts/Authentication';

import IdentityAuthentication from '../pages/IdentityAuthentication';
import PhoneCertification from '../pages/PhoneCertification';

export default function Router() {
  const { token } = useContext(AuthenticationContext);

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/identity-authentication" replace />}
      />
      <Route
        path="/identity-authentication"
        element={<IdentityAuthentication />}
      />
      <Route
        path="/phone-certification"
        element={
          token ? (
            <PhoneCertification />
          ) : (
            <Navigate to="/identity-authentication" replace />
          )
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
