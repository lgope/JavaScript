const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');

passwordInput.addEventListener('input', ($event) => {
    let eventLength = $event.target.value.length;
    if (eventLength >= 6 && eventLength <= 12) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'true');
    }
});