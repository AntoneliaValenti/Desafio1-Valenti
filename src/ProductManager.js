
const fs = require('fs').promises
const express = require('express')
const app = express()
// async function inventario(path, products) {
//     try {
//         await fs.promises.writeFile(path, JSON.stringify(products, null, 2), 'utf-8');
//         console.log("Producto agregado correctamente");
//     } catch (err) {
//         console.error(`Hubo un error al escribir en el archivo: ${err}`);
//     }
// }

class ProductManager {
    constructor() {
        this.products = [];
        this.id = 0;
        this.path = './prod.json';
    }

    async allProducts() {
        try {
            let res = await fsPromises.readFile('./prod.json', 'utf-8');
            return res;
        } catch (err) {
            console.error(`Hubo un error al leer el archivo: ${err}`);
        }
    }
    

    saveProduct(product) {
        const id = Math.random()
        product.id = id
        this.products.push(product)
    }
}



const productManager = new ProductManager()

productManager.allProducts().then(res => {
    console.log("RES: ", res)
})


module.exports = productManager


    // async getProduct() {
    //     try {
    //         const data = await fs.promises.readFile(this.path, 'utf-8');
    //         this.products = JSON.parse(data);
    //         console.log(this.products);
    //     } catch (err) {
    //         console.error(`Hubo un error: ${err}`);
    //     }
    // }

//     async addProduct(title, description, price, thumbnail, code, stock) {
//         if (!title || !description || !price || !thumbnail || !code || !stock) {
//             console.log("Todos los datos son obligatorios");
//         } else {
//             let condition = true;
//             try {
//                 const data = await fs.promises.readFile(this.path, 'utf-8');
//                 this.products = JSON.parse(data);

//                 do {
//                     if (!this.products.some(prod => prod.id === this.id)) {
//                         condition = false;
//                         if (!this.products.some(prod => prod.code === code)) {
//                             let newProduct = { id: this.id++, title, description, price, thumbnail, code, stock };
//                             this.products.push(newProduct);
//                             await inventario(this.path, this.products);
//                         } else {
//                             console.log(`Ya existe un producto con el código ${code}`);
//                         }
//                     } else {
//                         this.id++;
//                     }
//                 } while (condition);
//             } catch (err) {
//                 console.log(`Existe un error: ${err}`);
//             }
//         }
//     }

//     async getProductById(id) {
//         try {
//             const data = await fs.promises.readFile(this.path, 'utf-8');
//             this.products = JSON.parse(data);
//             const element = this.products.find(e => e.id === id);
//             if (element) {
//                 console.log(element);
//             } else {
//                 console.log(`No existe ningún producto con el ID ${id}`);
//             }
//         } catch (err) {
//             console.log(`Hubo un error: ${err}`);
//         }
//     }


// let products = [
//     {
//         id: productManager.id++,
//         title: "Donde todo brilla",
//         description: "Libro de Allice kelen",
//         price: 1000,
//         thumbnail: "../Assets/donde.jpg",
//         code: 1001,
//         stock: 25,
//     },
//     {
//         id: productManager.id++,
//         title: "El mapa de los anhelos",
//         description: "Libro de Allice kelen",
//         price: 1100,
//         thumbnail: "../Assets/mapa.jpg",
//         code: 1002,
//         stock: 20,
//     },
//     {
//         id: productManager.id++,
//         title: "El dia que dejo de nevar en Alaska",
//         description: "Libro de Allice kelen",
//         price: 1200,
//         thumbnail: "../Assets/dia.jpg",
//         code: 1003,
//         stock: 15,
//     }
// ];



// // Crear
// fs.writeFileSync('./pred.json', JSON.stringify(products, null, 2), { encoding: 'utf-8' });

// // Leer
// let readRes = fs.readFileSync('./pred.json', { encoding: 'utf-8' });

// // Agregar
// let arrayPr = JSON.parse(readRes);

// arrayPr.push({
//     id: productManager.id++,
//     title: "Nosotros en la luna",
//     description: "Libro de Allice kelen",
//     price: 1500,
//     thumbnail: "../Assets/luna.jpg",
//     code: 1004,
//     stock: 5,
// });

// fs.writeFileSync('./pred.json', JSON.stringify(arrayPr, null, 2), { encoding: 'utf-8' });
// console.log(arrayPr);


