import React from 'react';
import Posts from '../posts.json'
import BlogPostsItem from './blog-post-item';

const BlogPosts = () => {
  return(
    <div>
    {
      Posts.map((post,i)=>{
      return(<BlogPostsItem key={i} postData = {post} />)
      })
    }
    </div>
  )
}



export default BlogPosts