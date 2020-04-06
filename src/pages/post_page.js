import React from 'react';
import Posts from '../blog-posts.json'

import ReactMarkdown from "react-markdown"

const PostPage = (props) => {
    const calledPath = props.match.params.id
    console.log(calledPath)

    const calledPost =  Posts.filter((post => {
        console.log(post.id)
        return post.id==calledPath
    }))
    console.log(calledPost)
    return calledPost[0]?(
      <div>
        <h1>Oldu Bu İş</h1>
        <h1>{calledPost[0].title}</h1> 
        <ReactMarkdown source={calledPost[0].content} escapeHtml={false} />
      </div>
    ):
    <div>404</div>
}

export default PostPage