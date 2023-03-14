import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.css';
import App from './App';
import { ProfileProvider } from './providers/ProfileProvider';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ProfileProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ProfileProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
