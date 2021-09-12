const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware
app.use(express.static('./public'))

// app.get ('/',(req,res)=>{
// res.sendFile(path.join(__dirname,'./navbar-app/index.html'))
//adding to static assets
//SSR

// })

app.get('*',(req,res)=>{

  res.status(404).send("<h1>Page Not Found</h1>")
})




app.listen(5000,()=>{
  console.log('server is lisinging on port 5000...')

})