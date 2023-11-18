// function exf(s,n) {
//     for (let index = 0; index < n; index++) {
//         console.log(s);
        
//     }
// }
function add(a,b) {
    return a-b
}
function first(array, n) {
    if (array == null || n<=0)
    return [];
    if (n == null)
    return array[0];
    return array.slice(0, n);
}
function last(array, n) {
    if (array == null)
    return [];
    if (n == null)
    return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
}
function chunk(array, size) {
    if (size <= 0) {
      return [];
    }
  
    var chunkedArr = [];
    var index = 0;
  
    while (index < array.length) {
      chunkedArr.push(array.slice(index, index + size));
      index += size;
    }
  
    return chunkedArr;
  }


// myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString()); console.log(myColor.join());
// console.log(myColor.join(''));


module.exports = {add,first,last,chunk};