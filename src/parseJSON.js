// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

// I: string
// O: properly ingested data object or primitive(String, Boolean, null, number)
// C:
// E: When Arrays are unclosed, when strings are unclosed

// Goal: Get a string converted into an understood by the computer

// Stubbing:
// simple, primitives

// first and last element helper function - signifies element types
  // {} for object
  // [] for array
  // "" for string

// string -> peel off " and load as string
// array -> peel off [ and load as recursive call
// array -> peel off { and load as recursive call

var parseJSON = function(json) {


  function getType(input) {
    let first = input[0];
    let last = input[input.length-1];
    if (first === '{' && last === '}'){
      return 'object';
    } else if (first ==='[' && last === ']'){
      return 'array';
    } else if (first ==='"' && last === '"'){
      return 'string';
    } else {
      return 'special case';
    }
  }
// console.log(getType(json));

 function peeler(input) {
   return input.slice(1,length-1);
 }


  // base case
   // string
   let type = getType(json);

   console.log('input: ',json)
   if(type === 'string'){
     console.log('String Out: ', peeler(json));
     return peeler(json);
   } else if (type === 'special case'){
     if (typeof Number(json) === 'number'){
       console.log('Number Out: ', Number(json));
       return Number(json);
     } else if (json === 'false'){
       console.log('Boolean Out: ', peeler(json));
     }

    //  console.log(Number(json));
    //  return Number(json);
   }
     // test
     // peel
     // load


};
