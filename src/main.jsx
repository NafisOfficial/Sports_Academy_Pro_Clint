import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import router from './Shared/Router/Router.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Authprovider from './Shared/AuthProvider/AuthProvider';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
      </QueryClientProvider>
    </Authprovider>
  </React.StrictMode>,
)
