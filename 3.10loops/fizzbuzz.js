function fizzBuzz(countTo) {
    // your code here
    const arr = [];
    for(let i = 1; i <= countTo; i++) {
      let pusher;
      if(i % 3 === 0) {
        pusher = 'fizz';
      } else if(i % 5 === 0) {
        pusher = 'buzz';
      } else {
        pusher = i;
      }
       if(i % 3 === 0 && i % 5 === 0){
         pusher = 'fizzbuzz';
      }
      console.log(pusher);
      arr.push(pusher);
    }
    return arr;
  }
  
  /* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
  // tests
  (function testFizzBuzz() {
    // we'll use the variables in our test cases
    const countTo = 16;
    const expected = [
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8, 
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz',
      16,
    ];
  
    const actual = fizzBuzz(countTo) || [];
  
    if (
      expected.length === actual.length &&
      expected.every(function(item, index) {
        return actual[index] === item;
      })
    ) {
      console.log('SUCCESS: fizzBuzz is working');
    } else {
      console.log('FAILURE: fizzBuzz is not working');
    }
  })();
  