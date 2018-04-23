// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  //i : (string) -- HTML element class name
  //o : (array) of HTML elements that contains the class name
  
  //iterate over node
  // push the element into the elements array
  // if the class name === className
  //return the elements array
  node = node || document.body;  
 
  var nodes = [];

  if(node.classList.contains(className)){
      nodes.push(node);
 }
 
  for(var i = 0; i < node.children.length; i++){
   // if(node.children[i].classList.contains(className)){
   //    console.log(1);
   //    nodes.push(node.children[i]);
          nodes=nodes.concat(getElementsByClassName(className,node.children[i]));
  } 


return nodes;
 

};
