import { Router } from "express"
import { ProductManager } from '../../src/ProductManager.js'


const productManagerInstance = new ProductManager()


const routerProd = Router()

routerProd.get('/', async (req, res) => {
    const { limit } = req.query
    const prods = await productManagerInstance.allProducts()
    const products = prods.slice(0, limit ? parseInt(limit) : undefined)
    res.status(200).send(products)
    
})

routerProd.get('/:id', async (req, res) =>{
    const {id} = req.params
    const prod = await productManagerInstance.getProductById(id)

    if(prod) {
        res.status(200).send(prod)
    } else {
        res.status(404).send("Producto no encontrado")
    }
}) 

routerProd.post('/', async (req, res) => {
    const conf = await productManagerInstance.addProduct(req.body)

    if(conf) {
        res.status(201).send("Producto creado")
    } else {
        res.status(404).send("Producto ya existente")
    }
})

routerProd.put('/:id', async(req, res ) => {
    const {id} = req.params
    const conf = await productManagerInstance.updateProduct(id, req.body)

    if(conf) {
        res.status(201).send("Producto actualizado")
    } else {
        res.status(404).send("Producto no encontrado")
    }
})

routerProd.delete('/:id', async(req, res) => {
    const {id} = req.params
    const conf = await productManagerInstance.delete(id)

    if(conf) {
        res.status(201).send("Producto eliminado")
    } else {
        res.status(404).send("Producto no encontrado")
    }
})

export default routerProd
