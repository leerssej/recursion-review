// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node = document.body) {
  //input is a string, targetClassName
  //output array of elements
  // add in new parameter, node
  // add in default document.node

  // set output array
  // start with root or document
  // split element classnames into array
  // access childNodes (thru doc.children)
  // if any match? (.includes())
    // push to outputArray :


  // if children? call getElementsByClassName

  // return outputArray
  // node = node || document.body;
  let outputArray = [];
  //console.log(node.className);
  //base case

  let currentNodeName = node.className.split(' ');
  if (currentNodeName.includes(className)){
    outputArray.push(node);
  }

  // recursive cases
  let childrenArr = node.children;
  for (let i = 0; i < childrenArr.length; i++) {
    let childResults = getElementsByClassName(className, childrenArr[i]);
    outputArray = outputArray.concat(childResults);
  }

  return outputArray;
};
