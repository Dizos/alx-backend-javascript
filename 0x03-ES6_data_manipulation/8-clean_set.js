function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  
  const filteredValues = [...set]
    .filter(value => typeof value === 'string' && value.startsWith(startString))
    .map(value => value.slice(startString.length));
  
  return filteredValues.join('-');
}

module.exports = cleanSet;
