const fs = require('fs')

fs.readFile('./text.txt', (err, data) => {
    if (err) {
        console.error('Could not read File.', err)
    } else{
        const transformedText = data.toString().toUpperCase()
        fs.writeFile('./text1.txt', transformedText, (err) => {
            if (err){
                console.error('Could not write file.', err)
            } else {
                console.log('File Written Successfully')
            }
        })
    }
   
})