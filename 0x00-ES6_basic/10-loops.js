export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  
  for (const [idx, value] of array.entries()) {
    array[idx] = appendString + value;
  }

  return array;
}
