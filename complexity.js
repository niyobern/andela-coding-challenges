function hasMajorityElement(array) {
  const countMap = new Map();
  
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const count = countMap.get(element) || 0;
    countMap.set(element, count + 1);
    
    if (count + 1 > array.length / 2) {
      return true;
    }
  }
  
  return false;
}
