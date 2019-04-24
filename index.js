const http = require('http')
const fs = require('fs')
const path = require('path')


// create server
const server = http.createServer((req, res) => {
  // build the path
  let filePath = path.join(
    __dirname,
    'views',
    req.url === '/' ? 'index.html' : req.url)
  
  // extension of file
  let extname = path.extname(filePath)

  // initial content type
  let contentType = 'text/html'

  // check ext and set content type
  switch (extname){
    case '.js':
      contentType = 'text/javascript'
      break
    case '.css':
      contentType = 'text/css'
      break
    case '.json':
      contentType = 'application/json'
      break
    case '.png':
      contentType = 'image/png'
      break
    case '.jpg':
      contentType = 'image/jpg'
      break
  }
  // read file
  fs.readFile(filePath, (err, content) => {
    if (err){
      if (err.code == 'ENOENT'){
        // page not found 404
        fs.readFile(path.join(__dirname,
          'views',
          '404.html'),
          (err, content)=> {
            res.writeHead(200, {'contet-Type' : 'text/html'})
            res.end(content, 'utf8')
          })
      } else {
        // server error 500
        res.writeHead(500)
        res.end(`server error : ${err.code}`)
      }
    } else {
      // success 200
      res.writeHead(200, {'content-Type' : contentType})
      res.end(content, 'utf8')
    }
  })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, ()=> console.log(`server running on port ${PORT}`))