const inputUsername = 'amol07';
const inputPassword = '12345';

function login(username, password) {
    if (username === inputUsername && password === inputPassword) {
        console.log('Login successful');
    } else {
        console.log('Invalid credentials');
    }
}

login('amol07', '12345');
login('amol07', 'wrongpassword');
login('wrongusername', '12345');

//Assignment 5- Functions