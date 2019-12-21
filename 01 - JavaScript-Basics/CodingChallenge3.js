/*****************************
 * CODING CHALLENGE 3
 */

/*
   Challenge Description :

John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

// Solution

function tipCalculator(bill) { // this funcion calculate the tips for each bill
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}


var bills = [124, 48, 268]; // current bill's
var tips = [tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
]; // storing tip's for each bill's at tips

var finalValues = [bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]; // final bill's after adding tip's

console.log(tips, finalValues); // [ 18.599999999999998, 9.600000000000001, 26.8 ] [ 142.6, 57.6, 294.8 ]