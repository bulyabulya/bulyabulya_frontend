import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import './styles/tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <CookiesProvider>
        <RecoilRoot>
        <App />
        </RecoilRoot>
      </CookiesProvider>
    </React.StrictMode>
  </BrowserRouter>
);
