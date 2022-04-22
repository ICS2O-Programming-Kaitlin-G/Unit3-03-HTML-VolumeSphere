// Created by: Katie
// Created on: April 2022
// This file contains the JS functions for index.html

/**
 * This function calculates the volume of a sphere
 */
function calculateVolumeClicked() {
  // it is now time to rejoice in the peace and simplicity of the radius. it is harvested with this line of code.
  let radius = parseFloat(document.getElementById('radius').value);

  // it is calculation time! wow!
  let volume = (4/3) * Math.PI * radius**3

  // output dropper :)
  document.getElementById('calculated-volume').innerHTML = 'the area of the sphere with the radius you have given is ' + volume.toFixed(2) + 'cm<sup>3</sup>';
}