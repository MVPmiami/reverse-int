module.exports = function reverse (n) {
  let result = '';
  if(n < 0){
    n = n * (-1);
    let numArray = n.toString().split('');
    numArray.reverse();
    numArray.forEach(function(item) {
      result += item;
    });
  }else{
    let numArray = n.toString().split('');
    numArray.reverse()
  
    numArray.forEach(function(item) {
      result += item;
    });
  }
  return +result;
}
