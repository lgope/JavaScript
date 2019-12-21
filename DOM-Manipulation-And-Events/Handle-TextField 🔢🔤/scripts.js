// DOM ELEMENT REFERENCES
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const submitButton = document.getElementById('submit-button');
const sidebar = document.getElementById('sidebar');
const commentForm = document.getElementById('comment-form');

submitButton.addEventListener('click', $event => {
    $event.preventDefault();
    sidebar.textContent = `Hi there, ${firstNameInput.value} ${lastNameInput.value}`;

    commentForm.reset();
});