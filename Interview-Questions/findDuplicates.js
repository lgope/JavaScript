// Find non negative duplicates and how many times

let array = [1, 4, -1, 8, 2, 4, 4, 4, 1, -1, 6, 2, 1, 9, 7];
function findDuplicates(arr) {
  let duplicateElements = {};
	 arr.forEach((currentValue, currentIndex) => {
     
     // return currentValue > 0 && arr.indexOf(currentValue) !== currentIndex; // return non negative and duplicate elements
     
     // find how many times
     if(currentValue > 0 && arr.indexOf(currentValue) !== currentIndex){
      duplicateElements[currentValue] = (duplicateElements[currentValue] || 1) + 1;
     }

     // console.log(currentValue, currentIndex, arr.indexOf(currentValue))
    });


    return duplicateElements;
}

console.log(findDuplicates(array), Object.keys(findDuplicates(array)));
