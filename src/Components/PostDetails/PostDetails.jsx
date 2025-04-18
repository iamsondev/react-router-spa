import React from 'react';
import { useLoaderData } from 'react-router';
import './PostDetails.css'
const PostDetails = () => {
  const post = useLoaderData();
  const {id, title, body}= post;
  
  return (
    <div className='postDetails'>
       <h1>this post details</h1>
       <h3>ID : {id}</h3>
       <h2>Title : {title}</h2>
       <p>{body}</p>
    </div>
  );
};

export default PostDetails;