const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
// function sortByHeight(arr) {
//   let separatorIndexArr=[];
//   arr.forEach((element, index) => {
//     if(element === -1) {
//       separatorIndexArr.push(index);
//     }
//   })
//   let arrCopy = [...arr];
//   let newArr = [];
//   let separator = -1;

//   for(let i = 0; i <= arrCopy.length-1; i++){
//     arrCopy[i].forEach((elem)=>{
//     if(elem !== -1){newArr.push(elem)}
//   })}


  
//   // while(arrCopy.length){
//   //   for(let i = 0; i <= separatorIndexArr.length-1; i++){
//   //     newArr.push(arrCopy.splice(separatorIndexArr[i], separatorIndexArr[i+1]-separatorIndexArr[i]))
//   //   }

//   // }

//   // let cleanArr = (newArr.filter((elem)=> elem.length !== 0));

//   // for(let i = 0; i <= cleanArr.length -1; i++){
//   //   cleanArr[i].sort((a,b)=> a-b);
//   // }
  

//  console,log (cleanArr);
  
// }

function sortByHeight(arr) {
  let separatorIndexArr=[];
  arr.forEach((element, index) => {
    if(element === -1) {
      separatorIndexArr.push(index);
    }
  })
  let arrCopy = [...arr];
  let newArr = [];
  let separator = -1;

  arrCopy.forEach(elem=> {
    if(elem !== separator) {
    newArr.push(elem)}
  })

  newArr.sort((a,b)=> a-b);

  for(let i = 0; i <= separatorIndexArr.length-1; i++){
    newArr.splice(separatorIndexArr[i], 0, separator)
  }

 return (newArr);
  
}

module.exports = {
  sortByHeight
};
