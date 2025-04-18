import React from 'react';
import './User.css'
import { Link } from 'react-router';
const User = ({user}) => {
  const {id,name,phone,website, email} = user;
  return (
    <div className='user'>
           <h3>Name:{name}</h3>
           <p>Phone : {phone}</p>
           <p>Email : {email}</p>
           <p>Website : {website}</p>
           <Link to={`/users/{id}`}>Show Details</Link>
    </div>
  );
};

export default User;