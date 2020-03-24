const http = require('http')  // require built-in Node.js http package

// Use hosting values if available, otherwise default 
const hostname = process.env.hostname || '192.168.0.22' // allow remote access
const port = process.env.PORT || 3022

// define our server
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hi Guys, This is my first server side program :D\n')
})

// start listening
// use the server console to tell user where to find the server
// use backticks for template literals with embedded expressions
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})