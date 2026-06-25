let products     = [
    { id: 1, name: 'Laptop', price: 55000 },
    { id: 2, name: 'Mobile', price: 15000 },
    { id: 3, name: 'Tablet', price: 30000 },
    { id: 4, name: 'Headphones', price: 1000 },
    { id: 5, name: 'Smartwatch', price: 2000 }
];
let filteredProducts = products.filter(product => product.price < 50000);

console.log(filteredProducts);

//Assignment 6- Array Methods