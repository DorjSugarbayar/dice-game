// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var score = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundscore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувчсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random()*6)+1;

// Програм эхлэхэд бэлтгэе
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";    

console.log(dice);
