const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let smallest;
  let largest;

  function findSmallestAndLargest(){
    const first = s1.toString().split('');
    const second = s2.toString().split('');
    if(first.length <= second.length){
      smallest = [...first];
      largest = [...second];
    }else {
      smallest = [...second];
      largest = [...first];
    }
  } findSmallestAndLargest();

  for(let i = 0; i <= smallest.length - 1; i++) {
    
    let matchPosition = largest.indexOf(smallest[i]);
    if(matchPosition !== -1) {
      count += 1;
      largest.splice(matchPosition, 1);
    }
    
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
