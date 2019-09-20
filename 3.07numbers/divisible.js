function isDivisible(divisee, divisor) {
    // your code here
    let remainder = divisee % divisor;
    if(remainder == 0) {
        return true;
    } 
    return false;
  }

  // tests
  
  function testIsDivisible() {
    if (isDivisible(10, 2) && !isDivisible(11, 2)) {
      console.log('SUCCESS: `isDivisible` is working');
    } else {
      console.log('FAILURE: `isDivisible` is not working');
    }
  }
  
  testIsDivisible();
  