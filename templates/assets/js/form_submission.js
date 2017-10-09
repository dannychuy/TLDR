$(document).ready(function() {
// var input = document.querySelector('input');

// input.addEventListener('change', updateText);

// function updateText() {
//     var curr = input.files;
//     console.log(input.name);
// }

// });

var input = document.querySelector('input');
var drag = document.getElementById("drag");

input.addEventListener('change', updateDescription);
function updateDescription() {

  var curFiles = input.files;
  if(curFiles.length === 0) {

  } else {
    drag.innerHTML='File name: ' + curFiles[0].name;    
  }
}

});