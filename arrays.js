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
  array = array.unshift(`${addElement}`);
  return array;
}
