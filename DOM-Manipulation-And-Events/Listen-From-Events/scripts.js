// Get access to DOM elements
const header = document.querySelector('header');

const blueButton = document.getElementById('color-button-blue');
const brownButton = document.getElementById('color-button-brown');
const greenButton = document.getElementById('color-button-green');
const noneButton = document.getElementById('color-button-none');

const addPostButton = document.getElementById('add-post');
const articleSection = document.querySelector('section');

const removePostButton = document.getElementById('remove-post');

// Click event listeners
blueButton.addEventListener('click', () => {
    header.classList.remove('brown-background', 'green-background');
    header.classList.add('blue-background', 'text-white');
});

brownButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'green-background');
    header.classList.add('brown-background', 'text-white');
});

greenButton.addEventListener('click', () => {
    header.classList.remove('brown-background', 'blue-background');
    header.classList.add('green-background', 'text-white');
});

noneButton.addEventListener('click', () => {
    header.classList.remove('brown-background', 'blue-background', 'green-background', 'text-white');
});


addPostButton.addEventListener('click', () => {
    const newPost = createNewPost();
    articleSection.appendChild(newPost);
});

// Page function
const createNewPost = () => {
    let newArticle = document.createElement('article');
    let newHeading = document.createElement('h5');
    let newParagraph = document.createElement('p');

    newHeading.textContent = 'Another blog post';
    newParagraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perferendis sequi impedit, possimus recusandae itaque aperiam laboriosam cupiditate quasi animi magni dolorem quaerat beatae ex inventore dolore ducimus minus eaque.';

    newArticle.appendChild(newHeading);
    newArticle.appendChild(newParagraph);

    newArticle.classList.add('list-group-item');

    return newArticle;
}

// Remove Page
removePostButton.addEventListener('click', () => {
    const articleCount = articleSection.childElementCount;
    if (articleCount > 1) {
        articleSection.removeChild(articleSection.children[articleCount - 1]);
    }
});



