var object = {};

var object = new Object(); // It's not recommended to use

var object = {
  id: 1,
  name: 'john'
};

function hello() {
  return "hello";
}

var object = {
  id: 1,
  name: 'john',
  getName: function () {
    return this.id;
  }
};

function getName() {
  return object.id;
}

//
var arr = [];

var arr = new Array(); // It's not recommend to use

// Adds an element in the last index of an array
arr.push(1);
arr.push(2);
arr.push(3);

arr.pop();

arr.unshift();
arr.shift();

// AJAX
var req = new XMLHttpRequest();
req.onreadystatechange = function () {
  console.log(this.responseText);
}
req.open('get', 'https://jsonplaceholder.typicode.com/todos/1', true)
req.send();

