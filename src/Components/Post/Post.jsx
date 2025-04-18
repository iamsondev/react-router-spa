import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
  const {id, title, body}=post;
  return (
    <div className='Post'> 
        <h3>Id : {id}</h3>
        <h4>Title : {title}</h4>
        <p>{body}</p>
        <Link to={`/posts/${id}`}> <button>Details</button></Link>
        
    </div>
  );
};

export default Post;