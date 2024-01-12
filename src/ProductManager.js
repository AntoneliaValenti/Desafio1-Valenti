const fs = require('fs').promises;

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
            let res = await fs.readFile(this.path, 'utf-8');
            return JSON.parse(res);
        } catch (err) {
            console.error(`Hubo un error al leer el archivo: ${err}`);
        }
    }


    async addProduct(title, description, price, thumbnail, code, stock) {
        try {
            const data = await fs.readFile(this.path, 'utf-8');
            this.products = JSON.parse(data);


            if (this.products.some(prod => prod.code === code)) {
                console.log(`Ya existe un producto con el código ${code}`);
                return;
            }


            let newProduct = { id: this.id++, title, description, price, thumbnail, code, stock };
            this.products.push(newProduct);


            await fs.writeFile(this.path, JSON.stringify(this.products, null, 2), 'utf-8');
            console.log("Producto agregado correctamente");
        } catch (err) {
            console.error(`Existe un error: ${err}`);
        }
    }


    async getProductById(id) {
        try {
            const data = await fs.readFile(this.path, 'utf-8');
            this.products = JSON.parse(data);
            const element = this.products.find(e => e.id === id);
            if (element) {
                console.log(element);
            } else {
                console.log(`No existe ningún producto con el ID ${id}`);
            }
        } catch (err) {
            console.error(`Hubo un error: ${err}`);
        }
    }
}



module.exports = ProductManager;
