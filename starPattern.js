// 1
// 2 3
// 4 5 6

var row = 3,
  num = 1;
for (var i = 0; i < row; i++) {
  for (var j = 0; j <= i; j++) {
    process.stdout.write(num + " ");
    num++;
  }
  console.log();
}

