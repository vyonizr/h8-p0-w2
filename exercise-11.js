function balikKata(kata) {
  var terbalik = ""; // this is an empty STRING to be filled with reversed characters
  var i = kata.length;
  
  for (i; i >= 0; i--) { 
    terbalik += kata.charAt(i); // adds the letter from the end of the string
  }
  return terbalik;
}

  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS

  // kata.charAt(i) equals to kata[i]