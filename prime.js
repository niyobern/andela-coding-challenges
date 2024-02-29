function filterPrimes(arr) {
  var primes = [];
  
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    var isPrime = true;
    
    if (num === 1) {
      isPrime = false;
    } else {
      for (var j = 2; j < num; j++) {
        if (num % j === 0) {
          isPrime = false;
          break;
        }
      }
    }
    
    if (isPrime) {
      primes.push(num);
    }
  }
  
  return primes;
}
