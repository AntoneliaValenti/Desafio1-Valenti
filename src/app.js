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
 
app.get("/allProducts", async (req, res) => {
    let limit = req.query.limit; //Declaramos una variable que recibe la query de la URL
    let response = await products.allProducts(); //traemos el array de productos 
    if (limit && !isNaN(limit)) { //preguntamos si limit existe en la url
      response = response.slice(0, parseInt(limit)); //limitamos el array
    }
  
    res.json(response); //respondemos con el array
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

