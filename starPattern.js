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

//     *
//   * *
// * * *
var n = 4;
for (var i = 1; i < n; i++) {
  for (var j = 1; j < 2 * (n - i); j++) {
    process.stdout.write(" ");
  }
  for (var k = i; k >= 1; k--) {
    process.stdout.write("* ");
  }
  console.log();
}

//     *
//   * * *
// * * * * *
var n = 3;
for (var i = 0; i < n; i++) {
  for (var j = 0; j < 2 * (n - i); j++) {
    process.stdout.write(" ");
  }
  for (var j = i; j >= 0; j--) {
    process.stdout.write("* ");
  }
  for (var j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
