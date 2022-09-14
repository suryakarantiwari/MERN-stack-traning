function addCount() {
  var sum = 0;

  for (var i = 1; i < 100000; i++) {
    sum += i;
  }

  return sum;
}

console.time();

addCount();

console.timeEnd();
