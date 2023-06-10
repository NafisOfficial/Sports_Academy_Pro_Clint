import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import router from './Shared/Router/Router.jsx';
import Authprovider from './Shared/AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router}/>
    </Authprovider>
  </React.StrictMode>,
)
