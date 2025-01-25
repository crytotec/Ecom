import { StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n';

const Root = () => {
  

  return (
    <StrictMode>
      <App/>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Root />);
