var songs = []
var gamle = []
x=0
y=1
o=31
p=7
hvor=60
function preload(){
  song1 = loadSound('sange/Fest_i_Danmark/bdk.mp3');
  song2 = loadSound('sange/Fest_i_Danmark/londontown.mp3');
  song3 = loadSound('sange/Fest_i_Danmark/endnu.mp3');
  song4 = loadSound('sange/Fest_i_Danmark/culo.mp3');
  song5 = loadSound('sange/Fest_i_Danmark/oui.mp3');
  song6 = loadSound('sange/Fest_i_Danmark/allin.mp3');
  song7= loadSound('sange/Fest_i_Danmark/orale.mp3');
  song8 = loadSound('sange/Fest_i_Danmark/dauda.mp3');
  song9 = loadSound('sange/Fest_i_Danmark/rally.mp3');
  song10 = loadSound('sange/Fest_i_Danmark/aldrigforsjov.mp3');
  song11 = loadSound('sange/Fest_i_Danmark/langsom.mp3');
  song12 = loadSound('sange/Fest_i_Danmark/bolgen.mp3');
  song13 = loadSound('sange/Fest_i_Danmark/dedikeret.mp3');
  song14 = loadSound('sange/Fest_i_Danmark/skejsen.mp3');
  song15 = loadSound('sange/Fest_i_Danmark/safari.mp3');
  song16 = loadSound('sange/Fest_i_Danmark/jailhouse.mp3');
  song17 = loadSound('sange/Fest_i_Danmark/vaiamor.mp3');
  song18 = loadSound('sange/Fest_i_Danmark/ojnepamig.mp3');
  song19 = loadSound('sange/Fest_i_Danmark/dem.mp3');
  song20 = loadSound('sange/Fest_i_Danmark/ensang.mp3');
  song21 = loadSound('sange/Fest_i_Danmark/rumbumbum.mp3');
  song22 = loadSound('sange/Fest_i_Danmark/sydpa.mp3');
  song23 = loadSound('sange/Fest_i_Danmark/nedemette.mp3');
  song24 = loadSound('sange/Fest_i_Danmark/sovnlos.mp3');
  song25 = loadSound('sange/Fest_i_Danmark/slemigen.mp3');
  song26 = loadSound('sange/Fest_i_Danmark/bedre.mp3');
  song27 = loadSound('sange/Fest_i_Danmark/iklavetpenge.mp3');
  song28 = loadSound('sange/Fest_i_Danmark/model.mp3');
  song29 = loadSound('sange/Fest_i_Danmark/unzunz.mp3');
  song30 = loadSound('sange/Fest_i_Danmark/damerpalager.mp3');
}

window.onload  = function(){
  document.getElementById("choises").style.display = "none";
}

function setup() {
    songs = [song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16, song17, song18, song19, song20, song21, song22, song23, song24, song25, song26, song27, song28, song29, song30];
}

function buttons(){
  var boxe = document.getElementsByClassName("boxe");
  var n = document.getElementById("n").checked;
  var m = document.getElementById("m").checked;
  var s = document.getElementById("s").checked;
    if (n == true){
        y=3;
    }
    else if (m == true){
        y=1;
    }
    else{
        y=0.5;
    }
    for (var i = 0; i<boxe.length; i++) {
      boxe[i].parentElement.removeChild(boxe[i]);
    }
    document.getElementById("choises").style.display = "block";
}
function b1(){
  o = 0;
}
function b2(){
  o = 1;
}
function b3(){
  o = 2;
}
function b4(){
  o = 3;
}
function b5(){
  o = 4;
}
function b6(){
  o = 5;
}
function b7(){
  o = 6;
}
function b8(){
  o = 7;
}
function b9(){
  o = 8;
}
function b10(){
  o = 9;
}
function b11(){
  o = 10;
}
function b12(){
  o = 11;
}
function b13(){
  o = 12;
}
function b14(){
  o = 13;
}
function b15(){
  o = 14;
}
function b16(){
  o = 15;
}
function b17(){
  o = 16;
}
function b18(){
  o = 17;
}
function b19(){
  o = 18;
}
function b20(){
  o = 19;
}
function b21(){
  o = 20;
}
function b22(){
  o = 21;
}
function b23(){
  o = 22;
}
function b24(){
  o = 23;
}
function b25(){
  o = 24;
}
function b26(){
  o = 25;
}
function b27(){
  o = 26;
}
function b28(){
  o = 27;
}
function b29(){
  o = 28;
}
function b30(){
  o = 29;
}

x = Math.floor(Math.random() * 29);
gamle.push(x);
function nysangknap() {

    if (o != x){
      songs[x].play(0,1,1,hvor,y);

}
    else{
      khara = "b" + (x+1);
      document.getElementById(khara).style.display = "none";
      while (gamle.includes(x) == true){
      x = Math.floor(Math.random() * 29);
      y = Math.floor(Math.random() * 80);
    }
      gamle.push(x);
    }

}