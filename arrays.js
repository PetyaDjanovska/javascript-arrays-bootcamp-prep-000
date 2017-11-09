var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray (array, addElement){
  var newArray = [`${addElement}`, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (array, addElement){
  array.unshift(`${addElement}`);
  var newArray = array.slice();
  return newArray;
}


function addElementToEndOfArray(array, addElement){
  var newArray = [...array,`${addElement}`];
  return newArray;
}

function destructivelyAddElementToEndOfArray (array, addElement){
  array = array.push(`${addElement}`);
  return array;
}
