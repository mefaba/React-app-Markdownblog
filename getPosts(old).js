const path = require("path")
const fs = require("fs")
const reader = require('markdown-reader')

const dirPath = path.join(__dirname, "./blog-posts")

/* console.log("Post Directory: ",dirPath) */
let postList = []

const getPosts = () => {

    new Promise((resolve)=>{
        fs.readdir(dirPath, (err, files) => {
            if (err) {
                return console.log("Failed to list contents of directory: " + err)
            }
            resolve(files)
        })
    })
    .then(files => {
        files.forEach((file, i) => {
            let postdir = `${dirPath}/${file}` // C:\Users\Mefa\Webdev Workshop\OtherProjects\markdownblog\my-blog-cra\blog-posts/my-first-ama.md
    
            reader(postdir).on('data', (maindata) => {
                maindata.data["id"] = i + 1
                console.log(maindata.data)
                /* console.log(maindata.data) */
                postList.push(maindata.data)
            })
          
            
        })
    })
    .then(console.log(postList))
        

   

}
    
getPosts()

/*     let listJson = JSON.stringify(list)
    fs.writeFileSync("src/posts.json", listJson) */




/* 
    filepaths.forEach((file, i) => {
        let postdir = `${dirPath}/${file}` // C:\Users\Mefa\Webdev Workshop\OtherProjects\markdownblog\my-blog-cra\blog-posts/my-first-ama.md
        reader(postdir).on('data', (maindata) => {
            maindata.data["id"] = i + 1
            console.log(maindata.data)
            console.log(maindata.data)
            postList.push(maindata.data)
        })
    }) */


/* console.log("1,2,3")
console.log(postList)
setTimeout(function(){console.log(postList)},3000) */