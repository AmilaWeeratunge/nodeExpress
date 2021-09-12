const express = require('express');
const app = express();

const { products } = require('./data.js')

app.get('/',(req,res)=>{
  // res.json([
  //   {name:"Amila"},
  //   {age:"35"}
  // ]);

  //res.json(data)

  res.status(200).send('<h1>Home Page </h1><a href="/api/products"> products </a>')

})


app.get('/api/products',(req,res)=>{

  const newProducts = products.map((product)=>{
    const {id,name,year} = product;
    return {id,name,year}
  })
  res.json(newProducts)

  
})


app.get('/api/products/:productID',(req,res)=>{

  // console.log(req)
  // console.log(req.params)

  const {productID}= req.params

  const singleProduct = products.find(
    (product)=> product.id === Number(productID))
  
 
  if(!singleProduct){
     return res.status(404).send('Product Dose Not Exist')
  }
  
  return res.json(singleProduct)

  
})

app.get('api/products/:productID/reviews/:reviewID',(req,res)=>{
  console.log(res.params)


})

app.get('/api/v1/query',(req,res)=>{
  console.log(req.query);
const {serach, limit} = req.query
let storedproduct =[...products];

if (serach){
  storedproduct = storedproduct.filter((product)=>{
    return product.name.startsWith(serach)
  })
}

if(limit){
  storedproduct = storedproduct.slice(0,Number(limit))
}

  res.status(200).json(storedproduct)
})


app.listen('5000',()=>{
  console.log("Server run on port number is 5000")
})