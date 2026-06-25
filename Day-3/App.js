import { login } from "./login.js";
import { products } from "./ProductsList.js";
import { addToCart, viewCart, cart } from "./cart.js";
import { checkout } from "./checkout.js";

try {
    console.log(login("amol07", "12345"));

    console.log("\nAvailable Products:");
    products.forEach(product => {
        console.log(
            `\n${product.id} - ${product.name} - ₹${product.price}`
        );
    });

    addToCart(products[0]);
    addToCart(products[1]);

    viewCart();

    checkout(cart);

} catch (error) {
    console.log(error.message);
}

//Assignment- Final Project