// Old way
function hello() {
  return 'hello';
}

console.log(hello());

// new way as per ES6
let hello = () => {
  return 'hello';
};

console.log(hello());

// Block scope vs Function scope

var a = 10;
if (true) {
  let b = 10;
}

console.log(a + b);

function get() {
  var c = 10;
  return;
}

console.log(a + c);