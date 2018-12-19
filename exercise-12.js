function konversiMenit(menit) {
  // you can only write your code here!
  var nMenit = Math.floor(menit / 60);
  var nDetik = (menit % 60);

  if ((menit % 60) < 10) {
    return (nMenit + ":" + 0 + (nDetik));
  }
  else {
    return (nMenit + ":" + (nDetik));
  }
}

  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00