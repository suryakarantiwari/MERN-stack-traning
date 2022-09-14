function hello1() {
  console.log("Hello function is running");
  greet();
}
function greet() {
  console.log("Greet Function is running");
}
function welcome() {
  console.log("Wlecome function is running");
  hello1();
}

function callback() {
  console.log("Hello from Callback1 ");
}
function callback2() {
  console.log("Hello from Callback2 ");
}

console.log("Start");
var sum1 = 0;
for (i = 0; i < 1000; i++) {
  sum1 += 1;
}
setTimeout(callback, 0);

console.log("End");

welcome();
