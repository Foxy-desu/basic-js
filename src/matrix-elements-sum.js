const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {

  let newArr=[];
  matrix.flat().forEach((elem)=>{
    if(elem !== 0) {
      newArr.push(elem);
    }
  });
  

  let presum = newArr.length === 0? 0 : newArr.reduce((a, b) => Number(a) + Number(b));

  function getSumOfDigits(n) {
    if(n === 0) {
      return 0
    }
    let numArr = n.toString().split('');
    let sum = numArr.reduce((a, b) => Number(a) + Number(b));
    let result = sum < 10 ? sum : getSumOfDigits(sum);
    return(Number(result));
  }
  getSumOfDigits(presum);
}

module.exports = {
  getMatrixElementsSum
};
