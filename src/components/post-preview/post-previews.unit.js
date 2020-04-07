import React from 'react';
import Posts from '../../blog-posts.json'
import ReactMarkdown from "react-markdown"
import "./post-previews.css"

const BlogPosts = ({ history }) => {
  return (
    <div className="preview-container">
      {
        Posts.map((postData, i) => {
          return (
            <div key={i}>
              <div className="preview-title" onClick={() => history.push(`/blog/${postData.id}`)}>
                <h1>{postData.title}</h1>
              </div>
              <ReactMarkdown source={postData.content} escapeHtml={true} allowedTypes={["text","paragraph"]} />
            </div>
          )
        })
      }
    </div>
  )
}


export default BlogPosts