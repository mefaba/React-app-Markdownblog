import React from 'react';
import Posts from '../blog-posts.json'

import ReactMarkdown from "react-markdown"

const PostPage = (props) => {
    /* LOGIC */
    const calledPath = props.match.params.id
    /* console.log(calledPath) */

    const calledPost =  Posts.find((post => {
        /* console.log(post.id) */
        return post.id===Number(calledPath)
    }))
    console.log(calledPost)

    /* VIEW */
    return calledPost?(
      <div>
        <h1>{calledPost.title}</h1> 
        <ReactMarkdown source={calledPost.content} escapeHtml={false} />
      </div>
    ):
    <div>404</div>
}

export default PostPage