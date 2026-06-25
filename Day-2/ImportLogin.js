import { login } from './ExportLogin.js';

try {
    const result = login("amol07", "12345");
    console.log(result);
} catch (error) {
    console.log(error.message);
}

//Assignment 3- Modules