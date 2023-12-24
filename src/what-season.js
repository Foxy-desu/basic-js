const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(data) {

  if (!data) {
    return ("Unable to determine the time of year!")
  } else if (Object.prototype.toString.call(data) !== '[object Date]') {
    throw new Error('Invalid date!');
  }else if(Object.getOwnPropertyNames(data).length !== 0){
    throw new Error('Invalid date!');
  }else {
    const dataString = data.toDateString().split(' ')[1];
    const seasons = {
      winter: ['Dec', 'Jan', 'Feb'],
      spring: ['Mar', 'Apr', 'May'],
      summer: ['Jun', 'Jul', 'Aug'],
      autumn: ['Sep', 'Oct', 'Nov']
    }

    for (let [season, value] of Object.entries(seasons)) {
      if (value.includes(dataString)) {
        return season;
      }
    }
    return false;
  }
}

module.exports = {
  getSeason
};
