/*
    Write a function that accepts a String as an argument

    The function should capitalize ONLY every other letter in the String

    The function should then return the converted String.

*/

// Edge cases
/**
 * "" => ""
 * letter === character
 *
 * starting caps at letter index 0
 *
 * "hello" => "HeLlO"
 * "yo eli" => "Yo eLi"
 * "hello????" => "HeLlO????"
 * "HELLO" => "HeLlO"
 */

const camelLetters = (str) => {
  let camelStr = "";
  for (let i = 0; i < str.length; i++) {
    // const element = array[i];
    // str = str[i].toUpperCase();
    // str = str.replaceAt(i, str[i].toUpperCase());
    // camelStr[i] = camelStr[i].toUpperCase();
    // console.log(str[i])

    camelStr += i % 2 === 0 ? str[i].toUpperCase() : str[i];
  }
  // console.log([...str].map((st, index) => index % 2 ? st.toUpperCase() : st).join(""))

  //   console.log(camelStr);
//   return camelStr.join("");
  return camelStr;
};

console.log(camelLetters("hello"));
// camelLetters("yo eli")
// camelLetters("hello????")
