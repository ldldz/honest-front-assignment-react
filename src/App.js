import { AuthenticationProvider } from './contexts/Authentication';
import Router from './Routes/Router';

import './styles.css';

function App() {
  return (
    <AuthenticationProvider>
      <Router />
    </AuthenticationProvider>
  );
}

export default App;
