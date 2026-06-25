function login(username, password) {
    const inputUsername = "amol07";
    const inputPassword = "12345";

    if (username === inputUsername && password === inputPassword) {
        return "Login Success";
    } else {
        throw new Error("Invalid Credentials");
    }
}

try {
    const result = login("amol07", "12345");
    console.log(result);
} catch (error) {
    console.log(error.message);
}

//Assignment 2- Error Handling