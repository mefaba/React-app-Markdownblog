import React from 'react';
import ReactMarkdown from "react-markdown"

const BlogPostsItem = ({postData}) => {
    return(
      <div>
        <h1>{postData.title}</h1> 
        <ReactMarkdown source={postData.content} escapeHtml={false} />
      </div>
    )
}


export default BlogPostsItem