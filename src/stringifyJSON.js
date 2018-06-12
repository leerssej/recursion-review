// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // I: Object, Array, Primitive(String, Boolean, null, number)
  // O: String
  // C:
  // E: Not functions, not undefined

  // Goal: turn complex objects into strings recursively
  let returnStr = '';
  // Base Case
  if (typeof obj === 'string') {
    returnStr += '"' + obj + '"';
  } else if (typeof obj === 'number') {
    returnStr += obj;
  } else if (typeof obj === 'boolean') {
    returnStr += obj;
  } else if (obj === null){
    returnStr += null;
  } else if (Array.isArray(obj)){
  // recursive cases
    //case of arrays
    returnStr += `[${obj.map(element => stringifyJSON(element))}]`;
  } else if (typeof obj === 'object') {
    //case of objects
    if(Object.keys(obj).length > 0){
      let objectValues = '';
      for (var key in obj) {
        if (obj[key] === undefined) {
          null;
        } else if (typeof obj[key] === 'function') {
          null;
        } else {
          objectValues += `"${key}":${stringifyJSON(obj[key])},`;
        }
      }
      let formattedObject = objectValues.slice(0, objectValues.length-1);
      returnStr += '{' + formattedObject + '}'
    } else {
      returnStr += '{}';
    }
  }
  return returnStr;
};
