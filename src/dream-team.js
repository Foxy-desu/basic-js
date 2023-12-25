const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let cleanArr = members.filter((elem)=> {
   return typeof elem === 'string';
  });

  let simplified = cleanArr.map(elem=>{
    return elem[0];
  })

  simplified.sort();

  return (simplified).join('').toUpperCase();
}

module.exports = {
  createDreamTeam
};
