function greatestToLeast(array) {
    // your code goes here
    for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < array.length-(1 + i); j++) {
        if(array[j] < array[j + 1]) {
          let placehold = array[j];
          array[j] = array[j+1];
          array[j+1] = placehold;
        }
      }
    }
    // i know about the sort function, the bubble sort is just more fun ^^ 
    
    // array.sort(function(a, b) {
        // return b - a;
    // });
    return array;
  }
  
  /* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
  // tests
  
  function testFunctionWorks(fn, input, expected) {
    const result = fn(input);
    if (
      result &&
      result.length === expected.length &&
      result.every(function(item, index) {
        return index === 0 || result[index] < result[index - 1];
      }) &&
      result.every(function(item) {
        return expected.indexOf(item) > -1;
      })
    ) {
      console.log('SUCCESS: `' + fn.name + '` works!');
      return true;
    } else {
      console.error(
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
  
  function runTests() {
    const input1 = [10, 3, 5, 22, 19];
    const result1 = [22, 19, 10, 5, 3];
    const input2 = [2, 4, 6, 8];
    const result2 = [8, 6, 4, 2];
  
    const testResults = [
      testFunctionWorks(greatestToLeast, input1, result1),
      testFunctionWorks(greatestToLeast, input2, result2),
    ];
  
    const numPassing = testResults.filter(function(result) {
      return result;
    }).length;
    console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
  }
  
  runTests();
  