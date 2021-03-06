//console.log('Express Tutorial')

const http= require('http')
const {readFileSync} = require('fs');



// Get all files 

const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const portNo = 5000;

const server = http.createServer((req,res)=>{

    const url = req.url
   if(url === '/'){
    res.writeHead(200,{'content-type': 'text/html'})
    res.write(homePage)
    console.log('Home Page')
 
     res.end()
   }
   //style
   else if(url === '/styles.css'){
    res.writeHead(200,{'content-type': 'text/css'})
    res.write(homeStyles)
 
     res.end()
   }
   //logo
   else if(url === '/logo.svg'){
    res.writeHead(200,{'content-type': 'image/svg+xml'})
    res.write(homeImage)
 
     res.end()
   }
   //Logic
   else if(url === '/browser-app.js'){
    res.writeHead(200,{'content-type': 'text/javascript'})
    res.write(homeLogic)
 
     res.end()
   }
   else {
    res.writeHead(404,{'content-type': 'text/html'})
    res.write('<h1> Page not found</h1>')
 
     res.end()
   }
})

server.listen(`${portNo}`)