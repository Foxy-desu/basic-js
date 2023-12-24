const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let catCount = 0;
  let cat = '^^'

  for(let i = 0; i <= matrix.length-1; i+=1) {
    for(let j = 0; j <= matrix[i].length-1; j+=1) {
      if(matrix[i][j] === cat) {
        catCount += 1;
      }
    }
  }

  return catCount;
}

module.exports = {
  countCats
};
