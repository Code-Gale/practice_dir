const http = require('http')

const server = http.createServer((request, response) => {
    console.log(request.url, request.method)

    response.setHeader('Content-Type', 'text/plain')

    response.write('Hello, world')
    response.end()
})



server.listen(3000, 'localhost', () => {    
    console.log('Listening for requests')
})