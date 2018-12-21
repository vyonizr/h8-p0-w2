function xo(str) {
  // you can only write your code here!
  var xCounter = 0;
  var oCounter = 0;
  var i = str.length;

  for (i - 1; i >= 0; i--) { // checks letters from the end
    if (str.charAt(i) == "x") {
      xCounter +=1;
    }
    else if (str.charAt(i) == "o") {
      oCounter +=1;
    }
  }
  if (xCounter === oCounter) {
    return true;
  }
  else {
    return false;
  }
}

  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true