const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digits = n.toString().split('');
  let combinations = [];

 for(let i = 0; i <= digits.length-1; i++) {
  let digitsArr = [...digits];
  digitsArr.splice(i, 1);
  combinations.push(Number(digitsArr.join('')));
 }
 let sorted = combinations.sort((a,b) => a - b);
 let last = sorted.length-1;
 
 return sorted[last]; 
}

module.exports = {
  deleteDigit
};
