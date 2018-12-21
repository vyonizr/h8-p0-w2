function konversiMenit(menit) {
  // you can only write your code here!
  var nJam = Math.floor(menit / 60);
  var nMenit = (menit % 60);

  if ((menit % 60) < 10) {
    return (nJam + ":" + 0 + (nMenit)); // if the minute is only 1 digit
  }
  else {
    return (nJam + ":" + (nMenit)); // the minute is 2 digits
  }
}

  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00