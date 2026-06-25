export function checkout(cart) {
    let total = 0;

    cart.forEach(product => {
        total += product.price;
    });

    console.log("\nCheckout Successful");
    console.log("\nTotal Amount: ₹" + total);
}