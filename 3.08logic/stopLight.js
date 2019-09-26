function doTrafficLights() {
  const activeLight = getActiveLight();
  // your code will replace this call
  // to `console.log()`
  if(activeLight === 'red'){
    turnRed();
  } else if(activeLight === 'green') {
    turnGreen();
  } else if(activeLight === 'yellow'){
    turnYellow();
  } else {
    setInterval(function(){
      console.log('turn');
      
      setTimeout(function(){turnOffLights();},1500);
      turnRed();
      } , 3000)
  }

  console.log(activeLight);

}

// this function randomly returns red, yellow, or green
// and is called by doTrafficLights.
// don't modify it!
function getActiveLight() {
return (['red', 'green', 'yellow', 'broken'])[Math.floor(Math.random() * 4)];
}
  
  /* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
  function turnOffLights() {
    $('.traffic-light').removeClass('yellow-on red-on green-on');
  }
  
  function turnGreen() {
    turnOffLights();
    $('.green-light').addClass('green-on');
  }
  
  function turnYellow() {
    turnOffLights();
    $('.yellow-light').addClass('yellow-on');
  }
  
  function turnRed() {
    turnOffLights();
    $('.red-light').addClass('red-on');
  }
  
  
  function handleClicks() {
    $('.js-control-lights').click(function() {
      doTrafficLights();
    });
  }
  
  $(function() {
    turnOffLights();
    handleClicks();
  });