// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var results = [];
  //define recursive function
  var recurse = function(node) {

    //check current node for class name
    if (node.className.includes(className)) {
      //push into results is true
      results.push(node); 
    }
    if (node.children) {
      //check for child nodes 
      _.each(node.children, (child)=>{
        //if child nodes check for class name

        recurse(child);
      });
    }
    
  };
    
  //call func with doc body as argument
  recurse(document.body);

  return results;
};
