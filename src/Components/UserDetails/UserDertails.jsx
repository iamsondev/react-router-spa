import React from 'react';
import { useLoaderData } from 'react-router';

const UserDertails = () => {
  const user = useLoaderData ();
  console.log(user)
  const {name, website} = user;
  return (
    <div>

<h4>This is for User Details</h4>
         <p>{website}</p>

    </div>
  );
};

export default UserDertails;