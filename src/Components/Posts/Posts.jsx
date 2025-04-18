import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';
 import './Post.css'
const Posts = () => {
  const posts = useLoaderData()
  
  
  return (
    <div>
      <h1>Totall posts : {posts.length}</h1>
      
       {
        posts.map(post => <Post key={post.id} post={post}></Post>)
       }
        
    </div>
  );
};

export default Posts;