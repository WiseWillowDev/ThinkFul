function average(numbers) {
    if(numbers.length === 0) {
      return null;
    }
    if(numbers.length === 1) {
      return numbers[0];
    }
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
      total = total + numbers[i];
    }
    total = total / numbers.length;
    return total;
  }
  
  /* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
  // tests
  
  function testFunctionWorks(fn, input, expected) {
    if (fn(input) === expected) {
      console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
      return true;
    } else {
      console.log(
        'FAILURE: `' +
          fn.name +
          '([' +
          input +
          '])` should be ' +
          expected +
          ' but was ' +
          fn(input)
      );
      return false;
    }
  }
  
  (function runTests() {
    const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const correctAns1 = 5.5;
    const numList2 = [0, -1, 1];
    const correctAns2 = 0;
  
    const testResults = [
      testFunctionWorks(average, numList1, correctAns1),
      testFunctionWorks(average, numList2, correctAns2),
    ];
    const numPassing = testResults.filter(function(result) {
      return result;
    }).length;
    console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
  })();
  