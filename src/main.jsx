import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Docs from './components/pages/Docs';
import About from './components/pages/About';
import Javascript from './components/docs/Javascript';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/docs",
    element: <Docs />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)