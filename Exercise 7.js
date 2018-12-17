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
var asterisksRowStartCount2 = 1;

//HORIZONTAL ASTERISK FUNCTION
function horizontalAsterisks() { 
  var column2 = rows2; // row = column
  var asterisksColumnStartCount2 = 1;
  var asteriskContainer2 = ""; // an empty var that will be filled with asterisks
  while (asterisksColumnStartCount2 <= column2) {
      asteriskContainer2 += "*";
      asterisksColumnStartCount2++;
    }
  return asteriskContainer2;
}

// do loops to display asterisks in the console.
while (asterisksRowStartCount2 <= rows2) {
  console.log(horizontalAsterisks());
  asterisksRowStartCount2++;
}

console.log("-----------------------------------");
console.log("3. Menyusun Barisan Tangga Bintang Dengan Nested Looping");
var rows3 = 5 // input the number of rows
var asterisksRowStartCount3 = 1;
var asteriskContainer3 = "";

// do loops to display asterisks in the console.
while (asterisksRowStartCount3 <= rows3) {
  asteriskContainer3 += "*";
  console.log(asteriskContainer3);
  asterisksRowStartCount3++;
}