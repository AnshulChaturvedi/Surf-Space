import { createRoot } from 'react-dom/client';
import App from './App';
import ContextProvider from './Context/ContexProvider';

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);