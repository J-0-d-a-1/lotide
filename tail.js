const tail = function (arr) {
  // let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (i > 0) {
  //     newArr.push(arr[i]);
  //   }
  // }

  // if (arr.length === 0) {
  //   return arr;
  // }

  let newArr = arr.slice(1);
  return newArr;
};

module.exports = tail;
