const path = require("path")
const fs = require("fs")
const reader = require('markdown-reader')

const dirPath = path.join(__dirname, "./blog-posts")

let postList = []

const stream = reader(dirPath)

stream.on('data', function (maindata) {
    maindata.data["content"] = maindata.markdown
    postList.push(maindata.data)
  })
  
stream.on('end', function () {
    /* console.log(postList) */
    let postListJson = JSON.stringify(postList)
    fs.writeFileSync("src/posts.json", postListJson)
})
