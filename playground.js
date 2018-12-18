var kata = "Lorem ipsum";
console.log(kata.length);

var terbalik = "";

for (i = kata.length; i >= 0; i--) {
    terbalik += kata.charAt(i);
}

console.log(terbalik);


// KONVERSI MENIT
var menit = 65;

var menitKe = Math.floor(menit / 60);
if ((menit % 60) < 10) {
  console.log(menitKe + ":" + 0 + (menit % 60));
}
else {
  console.log(menitKe + ":" + (menit %60));
}