class Cart {
    constructor() {
        this.items = [];
    }

    addItem(product) {
        this.items.push(product);
        console.log(`${product.name} added to cart`);
    }

    removeItem(productId) {
        this.items = this.items.filter(
            item => item.id !== productId
        );
        console.log(`Product ${productId} removed from cart`);
    }

    viewCart() {
        console.log("Cart Items:");
        console.log(this.items);
    }
}

let cart = new Cart();

let product1 = {
    id: 1,
    name: "Laptop",
    price: 55000
};

let product2 = {
    id: 2,
    name: "Mobile",
    price: 15000
};

cart.addItem(product1);
cart.addItem(product2);

cart.viewCart();

cart.removeItem(1);

cart.viewCart();

//Assignment 4- Classes