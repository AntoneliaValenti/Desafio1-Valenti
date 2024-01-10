const express = require('express')
const productManager = require('./ProductManager')
const app = express()
const PORT = 8080
const { promises} = require('fs')

let products = new productManager()

app.get('/', (req, res)=> {
    res.send('Bienvenido al eccomerce')
})

app.get('/aalProducts', async(req, res)=>{
   const reponse = await products.allProducts()
   res.json(reponse)
})

app.listen(8080, () => {
    console.log(`server run on port ${PORT}`)
})

