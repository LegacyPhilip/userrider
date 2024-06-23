
  function turnOnRedLight1() {
    clearLights(1);
    document.querySelector('#traffic-light-1 .red').style.backgroundColor = 'red';
    turnOffYellow(1); // turn off yellow for this light
  }

  function turnOnYellowLight1() {
    clearLights(1);
    document.querySelector('#traffic-light-1 .yellow').style.backgroundColor = 'yellow';
  }

  function turnOnGreenLight1() {
    clearLights(1);
    document.querySelector('#traffic-light-1 .green').style.backgroundColor = 'green';
    turnOnRedForOtherLights(2, 3, 4); // turn on red for other lights
    turnOffYellowForOtherLights(2, 3, 4); // turn off yellow for other lights
  }

  function turnOnRedLight2() {
    clearLights(2);
    document.querySelector('#traffic-light-2 .red').style.backgroundColor = 'red';
    turnOffYellow(2); // turn off yellow for this light
  }

  function turnOnYellowLight2() {
    clearLights(2);
    document.querySelector('#traffic-light-2 .yellow').style.backgroundColor = 'yellow';
  }

  function turnOnGreenLight2() {
    clearLights(2);
    document.querySelector('#traffic-light-2 .green').style.backgroundColor = 'green';
    turnOnRedForOtherLights(1, 3, 4); // turn on red for other lights
    turnOffYellowForOtherLights(1, 3, 4); // turn off yellow for other lights
  }

  function turnOnRedLight3() {
    clearLights(3);
    document.querySelector('#traffic-light-3 .red').style.backgroundColor = 'red';
    turnOffYellow(3); // turn off yellow for this light
  }

  function turnOnYellowLight3() {
    clearLights(3);
    document.querySelector('#traffic-light-3 .yellow').style.backgroundColor = 'yellow';
  }

  function turnOnGreenLight3() {
    clearLights(3);
    document.querySelector('#traffic-light-3 .green').style.backgroundColor = 'green';
    turnOnRedForOtherLights(1, 2, 4); // turn on red for other lights
    turnOffYellowForOtherLights(1, 2, 4); // turn off yellow for other lights
  }

  function turnOnRedLight4() {
    clearLights(4);
    document.querySelector('#traffic-light-4 .red').style.backgroundColor = 'red';
    turnOffYellow(4); // turn off yellow for this light
  }

  function turnOnYellowLight4() {
    clearLights(4);
    document.querySelector('#traffic-light-4 .yellow').style.backgroundColor = 'yellow';
  }

  function turnOnGreenLight4() {
    clearLights(4);
    document.querySelector('#traffic-light-4 .green').style.backgroundColor = 'green';
    turnOnRedForOtherLights(1, 2, 3); // turn on red for other lights
    turnOffYellowForOtherLights(1, 2, 3); // turn off yellow for other lights
  }

  function clearLights(lightNumber) {
    const light = document.querySelector(`#traffic-light-${lightNumber}`);
    light.querySelector('.red').style.backgroundColor = 'black';
    light.querySelector('.yellow').style.backgroundColor = 'black';
    light.querySelector('.green').style.backgroundColor = 'black';
  }

  function turnOffYellow(lightNumber) {
    const light = document.querySelector(`#traffic-light-${lightNumber}`);
    light.querySelector('.yellow').style.backgroundColor = 'black';
  }

  function turnOnRedForOtherLights(...lightNumbers) {
    for (const lightNumber of lightNumbers) {
      const light = document.querySelector(`#traffic-light-${lightNumber}`);
      light.querySelector('.red').style.backgroundColor = 'red';
    }
  }

  function turnOffYellowForOtherLights(...lightNumbers) {
    for (const lightNumber of lightNumbers) {
      const light = document.querySelector(`#traffic-light-${lightNumber}`);
      light.querySelector('.green').style.backgroundColor = 'black';
      light.querySelector('.yellow').style.backgroundColor = 'black';

    }
  }





  function turnOffYellowForOtherLights(...lightNumbers) {

    let count = 60;
countdownTimer = setInterval(() => {
  document.querySelector('#countdown').textContent = count + "s";
  count--;
  if (count < 0) {
    clearInterval(countdownTimer);
    turnOffYellowForOtherLights(1, 2, 3, 4);
  } else if (count === 0) {
    clearInterval(countdownTimer); // Add this line to stop the timer
    turnOffYellowForOtherLights(1, 2, 3, 4);
    document.querySelector('#countdown').textContent = "60s";
    clearInterval(countdownTimer); // Add this line to stop the timer
  }
}, 1000);

    for (const lightNumber of lightNumbers) {
      const light = document.querySelector(`#traffic-light-${lightNumber}`);
      light.querySelector('.green').style.backgroundColor = 'black';
      light.querySelector('.yellow').style.backgroundColor = 'black';
     
      
    }



  }

  // Call the startCountdown function when the script loads
  // Call the startCountdown function when the script loads

