const http = require('http')

const server = http.createServer((request, response) => {
    console.log(request.url, request.method)
})

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests')
})