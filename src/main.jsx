import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Home from './Home/Home.jsx';
import Mobiles from './Mobiles/Mobiles.jsx';
import Laptops from './Laptops/Laptops.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children: [
      { index: true, Component: Home },
      { path:'mobiles', Component:Mobiles},
      { path: 'laptop', Component: Laptops }
    ]
  },
  {
    path: 'About',
    element: <div> I am Web Developer</div>
  },
  {
    path: 'app',
    Component: App
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
