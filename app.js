const http = require("http")
const port = process.env.PORT || 3000

const requestHandler = (request, response) => {
    response.end("Hello from sample node application. Version 2!")
}

const server = http.createServer(requestHandler)
server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})