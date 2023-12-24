const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);

  options.repeatTimes = options.repeatTimes || 1;

  if(String(options.separator) === 'null') {
    options.separator = 'null';
  }else if(String(options.separator) === 'false') {
    options.separator = 'false';
  } else {
    options.separator = options.separator || '+';
  }
  
  if(String(options.addition) === 'null') {
    options.addition = 'null';
  }else if(String(options.addition) === 'false') {
    options.addition = 'false';
  }else {
    options.addition = options.addition || '';
  }
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.additionSeparator = options.additionSeparator || '|';

  ////////////////////////////////////////////////////////////////////////
  let additionRepetition = setAdditionString();
  let strRepetition = setRepeatedString();

  function setAdditionString(){
    let addition = String(options.addition);
    let repeatTimes = options.additionRepeatTimes;
    let additionArray = [];
    let additionString;

    for(let i = 0; i < repeatTimes; i++) {
      additionArray.push(addition);
    }
    additionString = repeatTimes > 1?
      additionArray.join(String(options.additionSeparator)) :
      additionArray.join('');
      console.log(addition);
    return additionString;
  }

  function setRepeatedString(){
    let string = str;
    let repeatTimes = options.repeatTimes;
    let stringArray = [];
    let repeatedString;

    for(let i = 0; i < repeatTimes; i++) {
      stringArray.push(`${string}${additionRepetition? additionRepetition : ''}`);
    }
    repeatedString = repeatTimes > 1?
      stringArray.join(String(options.separator)) :
      stringArray.join('');
    return repeatedString;

  }

  return strRepetition;
}

module.exports = {
  repeater
};
