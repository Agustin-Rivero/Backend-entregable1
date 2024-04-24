class ProductManager {
    constructor () {
        this.products = [];
    }
    addProduct(nombre, descripcion, precio , img ,codigo, stock) {
        const product = {
            id: this.#getMaxId() +1,
            nombre,
            descripcion,
            precio,
            img,
            codigo,
            stock
        };
        this.products.push(product);
    }

#getMaxId() 
{
    let maxId = 0;
    this.products.map((product) => {
        if (product.id > maxId) maxId = product.id;
    });
    return maxId;
    }

    getProducts() {
        return this.products;
    }

    addCode(idCode){
        const product = this.#getProduct(idCode);
        if (product){
            console.log("Este codigo ya está en uso");
        }else{
            this.products.push({codigo:idCode});
            console.log("Codigo creado con éxito")
            }
        }

    #getProduct(idCode){
        return this.products.find((product) => product.codigo == idCode);
    }

    agregarProduct(id, nombre, descripcion, precio , img ,codigo, stock)
    { const product = this.#getProduct(id);
        if (product) {
            const newProduct =  {
                ...product,
                id: this.#getMaxId() +1,
                nombre,
                descripcion,
                precio,
                img,
                codigo,
            };
            this.products.push(newProduct);
        }

    }
}


const productManager= new ProductManager();

productManager.addProduct("Camiseta ARG", "Camiseta de arg 2022", 1000, "https://d2j6dbq0eux0bg.cloudfront.net/images/62219457/3206616864.jpg")
productManager.addProduct("Camiseta BRA", "Camiseta Brasil", 900, "https://www.aisope.com.ar/images/BZQK/KWCPH117_1.jpg")
console.log(productManager.getProducts());

