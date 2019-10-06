const limit = 1000;
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
    return array;
  }

      // array.sort(function(a, b) {
        // return b - a;
    // });
  
    function generate() {

        
    }