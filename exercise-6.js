//SOAL PERTAMA
console.log("SOAL PERTAMA:");
console.log("LOOPING PERTAMA");
var i = 2;
  while (i <= 20) {
    console.log(i + " - I love coding");
    i += 2;
  }

console.log("LOOPING KEDUA");
var i = 20;
  while (i >= 2) {
    console.log(i + " - I will become fullstack developer");
    i -= 2;
  }

console.log("------------------------------------");
//SOAL KEDUA
console.log("SOAL KEDUA:");
console.log("LOOPING PERTAMA");
var i = 1;
  while (i <= 20) {
    console.log(i + " - I love coding");
    i++;
  }

console.log("LOOPING KEDUA");
var i = 20;
  while (i >= 1) {
    console.log(i + " - I will become fullstack developer");
    i--;
  }

console.log("------------------------------------");
//SOAL KETIGA
console.log("SOAL KETIGA:");
for(i=1; i <= 100; i++) {
  if(i % 2 !== 0) {
    console.log(i + ": GANJIL");
  }
  else {
    console.log(i + ": GENAP");
  }
}
console.log("------------------");
//PERULANGAN COUNTER 2
console.log("PERULANGAN COUNTER 2");
for(i=1; i <= 100; i += 2) {
  if (i % 3 === 0) {
    console.log(i + " KELIPATAN 3");
  }
}

console.log("------------------");
//PERULANGAN COUNTER 5
console.log("PERULANGAN COUNTER 5");
for(i=1; i <= 100; i += 5) {
  if (i % 6 === 0) {
    console.log(i + " KELIPATAN 6");
  }
}

console.log("------------------");
//PERULANGAN COUNTER 9
console.log("PERULANGAN COUNTER 9");
for(i=1; i <= 100; i += 9) {
  if (i % 10 === 0) {
    console.log(i + " KELIPATAN 10");
  }
}