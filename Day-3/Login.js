export function login(username, password) {
    const validUsername = "amol07";
    const validPassword = "12345";

    if (username === validUsername && password === validPassword) {
        return "Login Success";
    }

    throw new Error("Invalid Credentials");
}