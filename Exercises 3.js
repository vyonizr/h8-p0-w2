var userName = "Afit";
var userRole = "Batu";
var welcomeMessage = "Selamat datang di dunia Proxytia, " + userName ;

if(userName == "") {
  console.log("Nama harus diisi!");
}
else if(userRole == "") {
  console.log("Halo, " + userName + ", pilih peranmu untuk memulai game!")
}
else if(userRole != "Ksatria" || userRole != "Tabib" || userRole != "Penyihir") {
  console.log(userName + ", kamu ingin menjadi Ksatria, Tabib, atau Penyihir?")
}
else {
  console.log(welcomeMessage);
}
  
if(userRole == "Ksatria") {
  console.log("Halo " + userRole + " " + userName + ", kamu dapat menyerang dengan senjatamu!");
}
else if(userRole == "Tabib") {
  console.log("Halo " + userRole + " " + userName + ", kamu akan membantu temanmu yang terluka.");
}
else if(userRole == "Penyihir") {
  console.log("Halo " + userRole + " " + userName + ", ciptakan keajaiban yang membantu kemenanganmu!");
}