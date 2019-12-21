function sum(value) {
    return value;
}

function range(value1, value2) {

    var res = 0;
    for (var i = value1; i <= value2; i++) {
        res += i;
    }

    return res;
}

console.log(sum(range(1, 10))); // passing range function as parameter
// 55

// more easy way
// var sum = function (value1, value2) {

//     var res = 0;
//     for (var i = value1; i <= value2; i++) {
//         res += i;
//     }

//     return res;
// }

// console.log(sum(1, 10));
// 55