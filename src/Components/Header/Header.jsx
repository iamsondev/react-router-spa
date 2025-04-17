import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'
const Header = () => {
  return (
    <div>
        <h1>This is header</h1>
        <nav>
           <NavLink to="/">Home</NavLink>
           <NavLink to="/mobiles">Mobiles</NavLink>
           <NavLink to="/laptop">Laptops</NavLink>
           <NavLink to="/">Home</NavLink>
        </nav>
    </div>
  );
};

export default Header;