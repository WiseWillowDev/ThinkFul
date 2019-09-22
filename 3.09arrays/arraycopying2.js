function minusLastItem(array) {
    let array2 = [];
    for (let i = 0; i < array.length-1; i++){
      array2.push(array[i]);
    }
    
    return array2;
  }
  
  function copyFirstHalf(array) {
      let array2 = [];
    let arrayLength = array.length;
    for(let i = 0; i < (arrayLength/2); i++) {
      // console.log(i);
      // console.log(array[i]);
      array2.push(array[i]);
    }
    if(arrayLength % 2 != 0) {
      array2.pop();
    }
    console.log(array2);
    // your code goes here
    return array2;
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
      result.every(function(item) {
        return expected.indexOf(item) > -1;
      })
    ) {
      console.log('SUCCESS: `' + fn.name + '` works!');
      return true;
    } else {
      console.error('FAILURE: `' + fn.name + '` is not working');
      return false;
    }
  }
  
  function runTests() {
    const list = [
      'red bull',
      'monster',
      'amp',
      'rockstar',
      'full throttle',
      'kickstart',
    ];
    const result1 = ['red bull', 'monster', 'amp', 'rockstar', 'full throttle'];
    const result2 = ['red bull', 'monster', 'amp'];
    const list2 = ['lions', 'tigers', 'bears'];
    const result3 = ['lions'];
    
    const testResults = [
      testFunctionWorks(minusLastItem, list, result1),
      testFunctionWorks(copyFirstHalf, list, result2),
      testFunctionWorks(copyFirstHalf, list2, result3)
    ];
  
    const numPassing = testResults.filter(function(result) {
      return result;
    }).length;
    console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
  }
  
  runTests();