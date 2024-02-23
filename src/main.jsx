import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense , useState , createContext } from 'react';

import App from './app';
import { AuthContext, AuthProvider } from './sections/auth/AuthProvider';
// import { AuthContext } from './sections/auth/AuthProvider';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <AuthProvider>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense>
          <App />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </AuthProvider>
);
