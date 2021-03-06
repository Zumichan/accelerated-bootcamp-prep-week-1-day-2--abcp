function addElementToBeginningOfArray(array, element) {
  var newArray = [element,...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var newArray =  array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(element);
  return array;
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length-1);
  return newArray;
}

// CHALLENGE: remove an element from the middle of the array/at a given index 
// and return a COPY of the original array, minus that element

function nonDestructivelyRemoveAtIndex(array, index) {
  array.splice(index,1);
  return array;
}
