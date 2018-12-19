var tanggal = 18;
var bulan = 12;
var tahun = 2018;

if(Number.isInteger(tanggal) && Number.isInteger(bulan) && Number.isInteger(tahun)) {
  if(1 <= tanggal && tanggal <= 31) {
    if(1 <= bulan && bulan <=12) {
      if(1900 <= tahun && tahun <= 2200) {
        switch(bulan) {
          case 1: { var bulan = "Januari";break; }
          case 2: { var bulan = "Februari"; break; }
          case 3: { var bulan = "Maret"; break; }
          case 4: { var bulan = "April"; break; }
          case 5: { var bulan = "Mei"; break; }
          case 6: { var bulan = "Juni"; break; }
          case 7: { var bulan = "Juli"; break; }
          case 8: { var bulan = "Agustus"; break; }
          case 9: { var bulan = "September"; break; }
          case 10: { var bulan = "Oktober"; break; }
          case 11: { var bulan = "November"; break; }
          case 12: { var bulan = "Desember"; break; }
          default: { var bulan = "Bulan tidak terdefinisi"; break; }
        }
        console.log(tanggal + " " + bulan + " " + tahun);
      }
      else salahTahun();
    }
    else salahBulan();
  }
  else salahTanggal();
}
else {
  console.log("Silahkan masukkan bilangan bulat");
}

// Functions for out-of-range ddmmyyyy input 
function salahTanggal(){
  if(1 <= bulan && bulan <=12) {
    if(1900 <= tahun && tahun <= 2200) {
      console.log("Silahkan masukkan tanggal antara 1-31");
    }
    else {
      console.log("Silahkan masukkan tanggal antara 1-31 dan tahun antara 1900-2200");
    }
  }
  else if(1900 <= tahun && tahun <= 2200) {
    console.log("Silahkan masukkan tanggal antara 1-31 dan bulan antara 1-12")
  }
  else {
    console.log("Silahkan masukkan tanggal antara 1-31, bulan antara 1-12, dan tahun antara 1900-2200")
  }
}

function salahBulan(){
  if(1900 <= tahun && tahun <= 2200) {
    console.log("Silahkan masukkan bulan antara 1-12");
  }
  else {
    console.log("Silahkan masukkan bulan antara 1-12 dan masukkan tahun antara 1900-2200");
  }
}

function salahTahun(){
  console.log("Silahkan masukkan tahun antara 1900-2200");
}