import React from 'react';
import './Root.css'
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className='root-main'>
      <Sidebar></Sidebar> 
        <Outlet></Outlet>
        
      </div>
      <Footer></Footer>

    </div>
  );
};

export default Root;