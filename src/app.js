import express from 'express'
import { prodRouter } from './routes/products.routes.js'
import { cartsRouter } from './routes/cart.routes.js'

const app = express()
const PORT = 8080


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/products', prodRouter)
app.use('/api/carts', cartsRouter)

app.listen(PORT, ()=> {
    console.log(`server run on port ${PORT}`)
})








//const express = require('express')
//const { promises } = require('fs')
//const ProductManager = require('./ProductManager')
// let products = new ProductManager()

// app.get('/', (req, res)=> {
//     res.send('Bienvenido al eccomerce')
// })

// app.get('/saludo', (req, res)=> {
//     res.send('Bienvenido a Productos')
// })
 
// app.get("/allProducts", async (req, res) => {
//     let limit = req.query.limit
//     let response = await products.allProducts() 
//     if (limit && !isNaN(limit)) {
//       response = response.slice(0, parseInt(limit)); 
//     }
  
//     res.json(response); 
//   })

//   app.get("/Product/:id", async (req, res) => {
//     const idP = req.params.id
//     let pr = await products.getProductById(parseInt(idP))
//     res.json(pr)
//   })



