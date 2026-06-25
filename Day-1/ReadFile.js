const fs = require("fs");

fs.readFile("/Users/amol/JSAutomation/Arrays/productsList.json", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    const products = JSON.parse(data);

    console.log("Product List:");
    
    products.forEach(product => {
        console.log(
            `ID: ${product.id}, Name: ${product.name}, Price: ₹${product.price}`
        );
    });
});

//Assignment 6- Arrays & Objects