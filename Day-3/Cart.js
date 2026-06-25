export let cart = [];

export function addToCart(product) {
    cart.push(product);
    console.log('\n' + product.name + " added to cart");
}

export function viewCart() {
    console.log("\nCart Items:");
    console.log(cart);
}