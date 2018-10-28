console.log('Generated index.html');
console.log('js loaded from external file');

document.addEventListener('click', function () {
  alert('Event listener has been added');
}); // Chrome, Firefox & Safari

document.addEventListener('onclick', function () {
  alert('Event listener has been added');
}); // IE9

// JQuery or Angular

