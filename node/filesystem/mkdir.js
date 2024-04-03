const fs = require('fs')

if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if (err){
            console.error(err)
        }else{
            console.log('Folder Created')
        }
    })
}