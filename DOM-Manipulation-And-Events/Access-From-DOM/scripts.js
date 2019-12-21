// Get access to the DOM
const main = document.querySelector('main');

const articles = document.getElementsByTagName('article');
const paragraphs = document.getElementsByTagName('p');

const firstArticle = articles[0];
const secondParagraphs = paragraphs[1];

const whiteTextElements = document.getElementsByClassName('text-white');

const sidebar = document.getElementById('sidebar');

// Modify the DOM
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Modify the DOM';

// Getting access to the parent tag
const header = document.getElementById('page-header');
header.innerHTML = '<h2>Modify the DOM</h2>';

// A touch of class with classList
header.classList.add('text-center');

sidebar.classList.remove('bg-info');
sidebar.classList.add('bg-success');

// Working with style
header.style.padding = '1em';
header.classList.remove('bg-dark');
header.style.backgroundColor = '#B54135';

// The joy of creation (adding new article)
let newArticle = document.createElement('article');
let newHeading = document.createElement('h3');
let newParagraph = document.createElement('p');

newHeading.textContent = 'Article 004';
newParagraph.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque consequatur impedit, et nulla fuga iste tempora doloribus dolores, aliquid quod nihil dicta! Modi, quaerat officiis! Quia repudiandae accusamus ad impedit corrupti pariatur, quod nam, velit eum, quas voluptatem! Repellat est quidem beatae eum sint?';

newArticle.appendChild(newHeading);
newArticle.appendChild(newParagraph);

newArticle.classList.add('m-2', 'p-2', 'border', 'border-secondary');

newArticle.setAttribute('id', 'art-004');

main.appendChild(newArticle);