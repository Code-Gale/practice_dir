const fs = require('fs')

//reading files
fs.readFile('./Blog/blog.txt', (err, data) => {
    if (err){
        console.error('Could not read file', err)
    }else{
        console.log(data.toString())
    }
})
console.log('First to finish')