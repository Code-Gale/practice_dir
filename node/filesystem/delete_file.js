const fs = require('fs')

if(fs.existsSync('./Blog/delete.txt')) {
    fs.unlink('./Blog/delete.txt', (err) => {
        if (err){
            console.error(err)
        } else{
            console.log('File deleted.')
        }
    })
}