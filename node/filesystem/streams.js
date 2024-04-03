const fs = require('fs')

const readStream = fs.createReadStream('./Blog/blog3.txt')
const writeStream = fs.createWriteStream('./Blog/blog5.txt')
readStream.on('data', (chunk) => {
    console.log('   NEW CHUNK   ')
    console.log(chunk.toString())

    writeStream.write('     NEW CHUNK       ')
    writeStream.write(chunk.toString())

})