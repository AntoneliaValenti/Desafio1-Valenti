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


const productManager = new ProductManager();


// fs.writeFileSync('./prod.json', JSON.stringify(products, null, 2), { encoding: 'utf-8' });
// let readRes = fs.readFileSync('./prod.json', { encoding: 'utf-8' });
// let arrayPr = JSON.parse(readRes);
// arrayPr.push({ id: productManager.id++, title: "Nosotros en la luna", description: "Libro de Allice kelen", price: 1500, thumbnail: "../Assets/luna.jpg", code: 1004, stock: 5 });
// fs.writeFileSync('./prod.json', JSON.stringify(arrayPr, null, 2), { encoding: 'utf-8' });


productManager.allProducts().then(res => {
    console.log("RES: ", res);
});


// productManager.addProduct("Nuevo Producto", "Descripción del nuevo producto", 200, "imagen.jpg", 1005, 10);
// productManager.getProductById(1);

module.exports = productManager;
