//////Take an array of numbers and sort them with evens at the front half of the array and the odds at the back half/////////


const nums = [1, 2, 4, 5, 6, 7, 8, 9];
//////first attempt////////////
function sortByEvenOdd(arr) {
  arr.sort((a, b) => {
    return a % 1 - b % 2;
  })                                          /////boom goes the dynamite.
  return arr;
}

console.log(sortByEvenOdd(nums));