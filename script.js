var songs = []
var gamle = []
x=0
y=1
hvor=0
function preload(){
   song1 = loadSound('sange/Fest_i_Danmark/aldrigforsjov.mp3');
   song2 = loadSound('sange/Fest_i_Danmark/allin.mp3');
   song3 = loadSound('sange/Fest_i_Danmark/bdk.mp3');
   song4 = loadSound('sange/Fest_i_Danmark/bedre.mp3');
   song5 = loadSound('sange/Fest_i_Danmark/bolgen.mp3');
   song6 = loadSound('sange/Fest_i_Danmark/culo.mp3');
   song7 = loadSound('sange/Fest_i_Danmark/damerpalager.mp3');
   song8 = loadSound('sange/Fest_i_Danmark/dauda.mp3');
   song9 = loadSound('sange/Fest_i_Danmark/dedikeret.mp3');
   song10 = loadSound('sange/Fest_i_Danmark/dem.mp3');
   song11 = loadSound('sange/Fest_i_Danmark/endnu.mp3');
   song12 = loadSound('sange/Fest_i_Danmark/ensang.mp3');
   song13 = loadSound('sange/Fest_i_Danmark/iklavetpenge.mp3');
   song14 = loadSound('sange/Fest_i_Danmark/jailhouse.mp3');
   song15 = loadSound('sange/Fest_i_Danmark/langsom.mp3');
   song16 = loadSound('sange/Fest_i_Danmark/londontown.mp3');
   song17 = loadSound('sange/Fest_i_Danmark/model.mp3');
   song18 = loadSound('sange/Fest_i_Danmark/nedemette.mp3');
   song19 = loadSound('sange/Fest_i_Danmark/ojnepamig.mp3');
   song20 = loadSound('sange/Fest_i_Danmark/orale.mp3');
   song21 = loadSound('sange/Fest_i_Danmark/oui.mp3');
   song22 = loadSound('sange/Fest_i_Danmark/rally.mp3');
   song23 = loadSound('sange/Fest_i_Danmark/rumbumbum.mp3');
   song24 = loadSound('sange/Fest_i_Danmark/safari.mp3');
   song25 = loadSound('sange/Fest_i_Danmark/skejsen.mp3');    
   song26 = loadSound('sange/Fest_i_Danmark/slemigen.mp3');
   song27 = loadSound('sange/Fest_i_Danmark/sovnlos.mp3');
   song28 = loadSound('sange/Fest_i_Danmark/sydpa.mp3');
   song29 = loadSound('sange/Fest_i_Danmark/unzunz.mp3');
   song30 = loadSound('sange/Fest_i_Danmark/vaiamor.mp3');
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

function nysangknap() {
  if (document.getElementById("b1").checked = true){
    o = 0;
  }
  else if (document.getElementById("b2").checked = true){
    o = 1;
  }
  else if (document.getElementById("b3").checked = true){
    o = 2;
  }
  else if (document.getElementById("b4").checked = true){
    o = 3;
  }
  else if (document.getElementById("b5").checked = true){
    o = 4;
  }
  else if (document.getElementById("b6").checked = true){
    o = 5;
  }
  else if (document.getElementById("b7").checked = true){
    o = 6;
  }
  else if (document.getElementById("b8").checked = true){
    o = 7;
  }
  else if (document.getElementById("b9").checked = true){
    o = 8;
  }
  else if (document.getElementById("b10").checked = true){
    o = 9;
  }
  else if (document.getElementById("b11").checked = true){
    o = 10;
  }
  else if (document.getElementById("b12").checked = true){
    o = 11;
  }
  else if (document.getElementById("b13").checked = true){
    o = 12;
  }
  else if (document.getElementById("b14").checked = true){
    o = 13;
  }
  else if (document.getElementById("b15").checked = true){
    o = 14;
  }
  else if (document.getElementById("b16").checked = true){
    o = 15;
  }
  else if (document.getElementById("b17").checked = true){
    o = 16;
  }
  else if (document.getElementById("b18").checked = true){
    o = 17;
  }
  else if (document.getElementById("b19").checked = true){
    o = 18;
  }
  else if (document.getElementById("b20").checked = true){
    o = 19;
  }
  else if (document.getElementById("b21").checked = true){
    o = 20;
  }
  else if (document.getElementById("b22").checked = true){
    o = 21;
  }
  else if (document.getElementById("b23").checked = true){
    o = 22;
  }
  else if (document.getElementById("b24").checked = true){
    o = 23;
  }
  else if (document.getElementById("b25").checked = true){
    o = 24;
  }
  else if (document.getElementById("b26").checked = true){
    o = 25;
  }
  else if (document.getElementById("b27").checked = true){
    o = 26;
  }
  else if (document.getElementById("b28").checked = true){
    o = 27;
  }
  else if (document.getElementById("b29").checked = true){
    o = 28;
  }
  else if (document.getElementById("b30").checked = true){
    o = 29;
  }
  if (songs[x].isPlaying()){
    songs[x].stop();
    }
      else{
    x = Math.floor(Math.random() * 29);
    while (gamle.includes(x) == true){
      x = Math.floor(Math.random() * 29);}
      hvor = Math.floor(Math.random()*50+20)
    gamle.push(x); 
    songs[x].play(0,1,1,hvor,y);}
    while (x == o){
      continue
    }
}