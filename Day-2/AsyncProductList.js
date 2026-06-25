let products = [
    { id: 1, name: 'Laptop', price: 55000 },
    { id: 2, name: 'Mobile', price: 15000 },
    { id: 3, name: 'Tablet', price: 30000 },
    { id: 4, name: 'Headphones', price: 1000 },
    { id: 5, name: 'Smartwatch', price: 2000 }
];

function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}

async function fetchProducts() {
    const productList = await getProducts();
    console.log(productList);
}

fetchProducts();

//Assignment 1- Async/Await