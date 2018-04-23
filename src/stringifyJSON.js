// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
if(typeof obj === 'number' || obj === null || typeof obj === 'boolean'){
  return ''+obj;
}

if(typeof obj === 'string'){
 return '"' + obj + '"';
}

if(Array.isArray(obj)){
 var array = []; 
 for(var i = 0; i < obj.length; i++){
   array.push(stringifyJSON(obj[i]));
 }
return '['+ array.join(',') + ']';
}

  var objArray = [];
for(var key in obj){
if(typeof obj[key] === 'function' || typeof obj[key] === 'undefined'){continue;}
  
  objArray.push(stringifyJSON(key)+ ':' + stringifyJSON(obj[key]));
  
}
return '{'+ objArray.join(',') + '}';



 

};
