var notes= ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b"]
var scale= [ [0,2,4,5,7,9,11],[0,2,3,5,7,9,10],[0,1,3,5,7,8,10],
                [0,2,4,5,7,8,10,11],[0,2,4,5,7,9,10],[0,2,3,5,7,9,10],[0,1,3,5,6,8,10] ]


var ionian= [0,2,4,5,7,9,11];
var dorian= [0,2,3,5,7,9,10];
var phrygian= [0,1,3,5,7,8,10];
var mixoLydian= [0,2,4,5,7,8,10,11];
var lydian= [0,2,4,5,7,8,10,11];
var aeolian= [0,2,3,5,7,9,10];
var locrian= [0,1,3,5,6,8,10];

function ionianList(){
  scale[0].forEach(function(element) {
    console.log(notes[element]);
  });
}

function gIonianList(){
  scale[0].forEach(function(element) {
    element=element + 7;
    if(element<12){
    console.log(notes[element]);
    element=element - 7
  }else if(element>=12){
    element=element-12;
    console.log(notes[element]);
    element=element+7+12
  }

  });
}
gIonianList()

function dorianList(){
  scale[1].forEach(function(element) {
    console.log(notes[element]);
  });
}

function phrygianList(){
  scale[2].forEach(function(element) {
    console.log(notes[element]);
  });
}

function mixoLydianList(){
  scale[3].forEach(function(element) {
    console.log(notes[element]);
  });
}

function lydianList(){
  scale[4].forEach(function(element) {
    console.log(notes[element]);
  });
}

function aeolianList(){
  scale[5].forEach(function(element) {
    console.log(notes[element]);
  });
}

function locrianList(){
  scale[6].forEach(function(element) {
    console.log(notes[element]);
  });
}




//var majorTri= [scale([0][0]), scale([0][2]), scale([0][4]),]
//var majorSev= majorTri + scale([0][6])
