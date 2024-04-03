const fs = require('fs')

//writing to existing files
fs.writeFile('./Blog/blog.txt', "Hello there, I'm updating the existing blog file.", () =>{
    console.log('File written.')
})

//writing to new file
fs.writeFile('./Blog/blog1.txt', "Hello again, This is a new file", () => {
    console.log('New File Written')
})