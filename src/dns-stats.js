const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainObject = new Map();
  let domainsReverse = [];

  domains.forEach((element)=> {
    let domainArr = element.split('.').reverse();
    domainsReverse.push(domainArr);
  })

  let domainJoinedArr = [];

  for(let i = 0; i<= domainsReverse.length-1; i++){
    let  domainArr = [];
    let iterationMultiplier = 1;
    for(let j = 0; j <= domainsReverse[i].length-1; j++){
      let reversed = JSON.parse(JSON.stringify(domainsReverse));
      domainArr.push((reversed[i].splice(0, iterationMultiplier)).join('.'));
      iterationMultiplier += 1
    }
    domainJoinedArr.push(domainArr);
  }

  function objectCreator(){
    let flattenArr = domainJoinedArr.flat();

    for(let i = 0; i <= flattenArr.length -1; i++){
      let count = 0;
      flattenArr.forEach(elem => {
        if(elem === flattenArr[i]) {
          count +=1;
        }
      })
      
      domainObject.set(`.${flattenArr[i]}`, count);
      
    }
    
  }
  objectCreator();
  
  return Object.fromEntries(domainObject);
}

module.exports = {
  getDNSStats
};
