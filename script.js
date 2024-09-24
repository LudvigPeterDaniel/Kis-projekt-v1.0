function showPassword() {
    let password = document.getElementById("jelszo");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}
function generatePassword() {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('jelszo').value = password;
}
