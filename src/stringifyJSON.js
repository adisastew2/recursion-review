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
    return '[' + strArr + ']';
  }
  //Objects 
  var newArr = _.map(obj,(item, key)=>{
      return stringifyJSON(key) + ':' + stringifyJSON(item);
    });
    return '{' + newArr + '}';
  
};