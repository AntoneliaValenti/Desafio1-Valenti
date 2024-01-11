const express = require('express')
const productManager = require('./ProductManager')
const app = express()
const PORT = 8080
const { promises } = require('fs')

let products = new productManager()

app.get('/', (req, res)=> {
    res.send('Bienvenido al eccomerce')
})

app.get('/saludo', (req, res)=> {
    res.send('Bienvenido a Productos')
})
app.get('/allProducts', async(req, res)=>{
   const response = await products.allProducts()
   res.json(response)
   if (limit) {
        const limitedResponse = response.slice(0, parseInt(limit, 2));
        res.json(limitedResponse);
    } else {
        res.json(response);
    }
})

app.get('/Product/:id', async(req, res)=>{
    const idP = (req.params)
    const pFound = products.find(product => {
        return product.id == idP
    })
    res.json(pFound)
 })

app.listen(PORT, ()=> {
    console.log(`server run on port ${PORT}`)
})

