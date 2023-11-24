// function repeater(x) {
//   if (x > 10) return 0;

//   console.log(x++);
// //   x++;
//   return repeater(x);
// }

// repeater(1);

const helloPrint = num => num < 11 && (console.log(num), helloPrint(++num));
helloPrint(1);
