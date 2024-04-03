const fs = require('fs')

const readStream = fs.createReadStream('dataset.txt')
const writeStream = fs.createWriteStream('dataset1.txt')
readStream.on('data', (chunk) => {
    console.log('   NEW CHUNK   ')
    console.log(chunk.toString())

    writeStream.write('     NEW CHUNK       ')
    writeStream.write(chunk.toString())

})