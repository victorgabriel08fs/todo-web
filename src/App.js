import './App.css';
import 'flowbite';

import Routes from './routes';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );

}

export default App;
