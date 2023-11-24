// Get access to the DOM
const main = document.querySelector("main");

const articles = document.getElementsByTagName("article");
const paragraphs = document.getElementsByTagName("p");

const firstArticle = articles[0];
const secondParagraphs = paragraphs[1];

const whiteTextElements = document.getElementsByClassName("text-white");

const sidebar = document.getElementById("sidebar");

// Modify the DOM
const mainHeading = document.getElementById("main-heading");
mainHeading.textContent = "Modify the DOM";

// Getting access to the parent tag
const header = document.getElementById("page-header");
header.innerHTML = "<h2>Modify the DOM</h2>";

// A touch of class with classList
header.classList.add("text-center");

sidebar.classList.remove("bg-info");
sidebar.classList.add("bg-success");

// Working with style
header.style.padding = "1em";
header.classList.remove("bg-dark");
header.style.backgroundColor = "#26e5d6";

// The joy of creation (adding new article)
let newArticle = document.createElement("article");
let newHeading = document.createElement("h3");
let newParagraph = document.createElement("p");

newHeading.textContent = "Article 005";
newParagraph.textContent ="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum aliquam officiis deserunt excepturi molestias culpa maxime hic? Iure autem quidem velit unde quo hic sed veritatis eaque. Neque, perspiciatis ullam, eum consequatur necessitatibus totam nam aliquid eaque officiis illo ducimus ab libero quas laborum quod. Nemo veritatis perferendis, necessitatibus fugiat repellendus nam aut expedita esse aspernatur, suscipit officiis magni praesentium.";

newArticle.appendChild(newHeading);
newArticle.appendChild(newParagraph);

newArticle.classList.add("m-2", "p-2", "border", "border-secondary");

newArticle.setAttribute("id", "art-005");

main.appendChild(newArticle);
