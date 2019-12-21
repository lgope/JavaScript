const passwordInput = document.getElementById('password-input');
const confirmPassword = document.getElementById('confirm-password');
const errorMsg = document.getElementById('error-message');

confirmPassword.addEventListener('blur', () => {
    if (passwordInput.value === confirmPassword.value) {
        passwordInput.style.border = 'thin solid green';
        confirmPassword.style.border = 'thin solid green';
        errorMsg.style.display = 'none';
    } else {
        passwordInput.style.border = 'thin solid red';
        confirmPassword.style.border = 'thin solid red';
        errorMsg.style.display = 'inline';
    }
});