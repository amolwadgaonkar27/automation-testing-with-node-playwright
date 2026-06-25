const fs = require('fs');

const data = fs.readFileSync('products.json', 'utf8');
const products = JSON.parse(data);

products.forEach(product => {
    console.log(
        `${product.id} - ${product.name} - ₹${product.price}`
    );
});

//Assignment 5- File Handling