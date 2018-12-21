console.log("1. Menyusun Barisan Bintang");
var rows1 = 5; // input the number of rows
var asterisksStartCount = 1;

// do loops to display asterisks in the console.
while (asterisksStartCount <= rows1) {
  console.log("*");
  asterisksStartCount++;
}

console.log("-----------------------------------");
console.log("2. Menyusun Barisan Bintang Dengan Nested Looping")
var rows2 = 5; // input the number of rows
var column2 = rows2; // column value = row value
var asterisksRowStartCount2 = 1;
var asterisksColumnStartCount2 = asterisksRowStartCount2;
var asteriskContainer2 = ""; // an EMPTY STRING that will be filled with asterisks

// do loops to display asterisks in the console.
while (asterisksRowStartCount2 <= rows2) {
  while (asterisksColumnStartCount2 <= column2) { // inline asterisks loop
    asteriskContainer2 += "*"; // asterisks are added into asteriskContainer2
    asterisksColumnStartCount2++;
  }
  console.log(asteriskContainer2); // *****
  asterisksRowStartCount2++;
}

console.log("-----------------------------------");
console.log("3. Menyusun Barisan Tangga Bintang Dengan Nested Looping");
var rows3 = 5 // input the number of rows
var asterisksRowStartCount3 = 1;

// do loops to display asterisks in the console.
for (i = 1; i <= 1; i++) {
  var asteriskContainer3 = "";

  for (var j = 0; j <= rows3; j++) {
    asteriskContainer3 += "*";
    console.log(asteriskContainer3);
  }
}