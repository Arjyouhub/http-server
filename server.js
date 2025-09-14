const http = require('http')

const server = http.createServer((req,res)=>{
  res.setHeader('content-type','text/html')

  if(req.url==='/'){

  res.write('<h1>Home page</h1>')
 }
 else if(req.url==='/about'){

    res.write('<h1>About page</h1>')
  
  }
  else{
    res.write('<h1>Page not found</h1>')
  }
  res.end()

})
server.listen(3000,()=>{
  console.log('server runnig')
  
})
