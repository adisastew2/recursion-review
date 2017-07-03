// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //primitve values 
  if (~['number', 'boolean'].indexOf(typeof obj) || obj === null) {
    return '' + obj; 
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"'; 
  }
  //Arrays
  if (Array.isArray(obj)) {
    var strArr = obj.map((item)=>{
      return stringifyJSON(item);
    });
    return '[' + strArr.join(',') + ']';
  }
  //Objects 
  
  var newArr = [];
  for (var key in obj) {
    if (obj[key] !== undefined && typeof obj[key] !== 'function') {
      newArr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
  }
  return '{' + newArr.join(',') + '}';
  
};