import { StrictMode, Suspense } from 'react'
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
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users2/Users2.jsx';
import UsersDertails from './Components/UserDetails/UserDertails.jsx';
import UserDertails from './Components/UserDetails/UserDertails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';
const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children: [
      { index: true, Component: Home },
      { path:'mobiles', Component:Mobiles},
      { path: 'laptop', Component: Laptops },
      {path : 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      Component: Users},
      {
        path:'users2',
        element:<Suspense fallback={<span>Data loading .......</span>}>
             <Users2 userPromise={userPromise}></Users2>
        </Suspense>
      },
      {
        path:'users/:userId',
        loader:({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component:UserDertails
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component:Posts
       },

       {
        path: 'posts/:postId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component:PostDetails
       }
      

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
