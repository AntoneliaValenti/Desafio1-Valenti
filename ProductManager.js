class ProductManager {
    constructor() {
        this.product = []
        this.id = 0
    }

    getProduct() {
        return this.product
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock){
            console.log("Todos los datos son obligatorios");
    }

    if (!this.product.some((p) => p.code === code)) {
        this.id++;
        let newProduct = { id: this.id, title, description, price, thumbnail, code, stock};
        
        this.product.push(newProduct);
        console.log(`El producto ${title} fue agregado correctamente`);
        } else {
            console.log(`Ya existe un producto con el codigo ${code}`);
        }
    }

    getProductCode(code) {
        let product = this.product.find((p) => p.code === code);
    
        if (!product) {
            console.log('No existe ningun producto con el codigo ${code}');
        } else {
            return product
        }
    }
    getProductById(id) {
        const product = this.product.find((p) => p.id === id);

        if (!product) {
            console.log(`No existe ningún producto con el ID ${id}`);
        } else {
            return product;
        }
    }
}


const product = new ProductManager();

product.addProduct("Donde todo brilla", "Libro de Allice kelen", 1000, "../Assets/donde.jpg", 1001, 10);
product.addProduct("El mapa de los anhelos", "Libro de Allice kelen", 1100, "../Assets/mapaan2.jpg", 1002, 15);
product.addProduct("El dia que dejo de nevar en Alaska", "Libro de Allice kelen", 10000, "../Assets/eldia.jpg", 1003, 12);
product.addProduct("Nosotros en la luna", "Libro de Allice kelen", 12000, "../Assets/nosotros.jpg", 1004, 12);
product.addProduct("La teoria de los archipielagos", "Libro de Allice kelen", 12690, "../Assets/archipielagos.jpg", 1005, 20);
product.addProduct("Todo lo que nunca fuimos", "Libro de Allice kelen", 17500, "../Assets/todo.jpg", 1006, 9);
product.addProduct("Todo lo que somos juntos", "Libro de Allice kelen", 17500, "../Assets/somos.jpg", 1007, 9);


console.log(product.getProduct());