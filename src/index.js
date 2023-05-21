import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './components/thems/default';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme} >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
