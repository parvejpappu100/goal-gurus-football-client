import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Router.jsx';
import AuthProvider from './providers/AuthProvider';

import { HelmetProvider } from 'react-helmet-async';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
