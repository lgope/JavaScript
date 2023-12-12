/*
    Write a function that accepts a String as an argument.

    The String is supposed to be HTML, but all the div elements are missing their closing tags (they have the < and >)

    The function's job is to find and close all the divs in the provided HTML String

    The function should return the entire corrected String.
*/

// Edge cases
/**
 * "<div><p>Here is a tag</p><div>" => "<div><p>Here is a tag</p></div>"
 *
 * "<div><div><p>Hello World</p><div><div>" => "<div></div><p>Here is a tag</p><div></div>"
 *
 * Second div should be closed div
 */

const closeSecondDivs = (str) => {
  let divCounter = 0;
  let unknownFour = "";
  let fixedHTML = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "<") {
      for (let j = 1; j < 5; j++) {
        unknownFour += str[i + j];
      }
    }

    if (unknownFour === "div>") {
      divCounter++;
      if (divCounter % 2 === 0) {
        fixedHTML += str[i] + "/";
        unknownFour = "";
        continue;
      }
    }

    fixedHTML += str[i];
    unknownFour = "";
  }

  return fixedHTML;
};

console.log(closeSecondDivs("<div><p>Here is a tag</p><div>"));
console.log(closeSecondDivs("<div><div><p>Hello World</p><div><div>"));
