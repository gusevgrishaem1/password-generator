let passwordLength = 15;

function updateLengthDisplay() {
    passwordLength = parseInt(document.getElementById('lengthRange').value, 10);
    document.getElementById('lengthValue').textContent = passwordLength;
}

function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
    }

    document.getElementById('password').value = password;
}

function showMsg(msg) {
    const messageDiv = document.createElement('div');
    messageDiv.id = 'message';
    messageDiv.textContent = msg;

    const container = document.querySelector('.container');
    container.appendChild(messageDiv);

    setTimeout(() => {
    messageDiv.style.opacity = '1';
    messageDiv.style.visibility = 'visible';
    }, 10);

    setTimeout(() => {
    messageDiv.style.opacity = '0';
    messageDiv.style.visibility = 'hidden';
    setTimeout(() => {
        container.removeChild(messageDiv);
    }, 500);
    }, 3000);
}

document.getElementById("password").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordField.value)
    .then(() => {
        showMsg('Password copied to clipboard!');
    })
    .catch(err => {
        console.error('Failed to copy password: ', err);
        showMsg('Failed to copy password.');
    });
});

// инициализация при загрузке
updateLengthDisplay();
generatePassword();