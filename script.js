function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    const passwordLength = 12; // Length of the password to generate
    let password = '';
    
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    document.getElementById('password').value = password;
}

document.getElementById("password").addEventListener("click", function(){
    const passwordField = document.getElementById("password");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordField.value)
        .then(() => {
            alert('Password copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy password: ', err);
            alert('Failed to copy password.');
        });
})