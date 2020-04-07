const path = require("path")
const fs = require("fs")
const reader = require('markdown-reader')

const dirPath = path.join(__dirname, "./blog-posts")

let postList = []

const stream = reader(dirPath)

stream.on('data', function (maindata) {
    let timestamp = Date.now() * Math.random()
    maindata.data["content"] = maindata.markdown
    maindata.data["id"] = Math.round(timestamp)
    postList.push(maindata.data)
  })
  
stream.on('end', function () {
    /* console.log(postList) */
    let postListJson = JSON.stringify(postList)
    fs.writeFileSync("src/blog-posts.json", postListJson)
})
