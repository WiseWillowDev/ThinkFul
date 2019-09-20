function celsToFahr(celsTemp) {
    // your code here
    return (celsTemp * 1.8) + 32;
  }
  
  function fahrToCels(fahrTemp) {
    // your code here
    return (fahrTemp - 32) / 1.8;
  }
  
  // tests
  
  function testConversion(fn, input, expected) {
    if (fn(input) === expected) {
      console.log('SUCCESS: `' + fn.name + '` is working');
      return true;
    } else {
      console.log('FAILURE: `' + fn.name + '` is not working');
      return false;
    }
  }
  
  function testConverters() {
    let cel2FahrInput = 100;
    let cel2FahrExpect = 212;
    let fahr2CelInput = 32;
    let fahr2CelExpect = 0;
  
    if (
      testConversion(celsToFahr, cel2FahrInput, cel2FahrExpect) &&
      testConversion(fahrToCels, fahr2CelInput, fahr2CelExpect)
    ) {
      console.log('SUCCESS: All tests passing');
    } else {
      console.log('FAILURE: Some tests are failing');
    }
  }
  
  testConverters();