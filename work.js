//1. Create an HTML page with two buttons that argue with
//each other. When one button is clicked,
//the text "I'm right" should be placed next to it.
//When the other button is clicked, the text is replaced with,
//"No, I'm right!"




thingone.addEventListener('click', imRight);
thingtwo.addEventListener('click', noImRight);

function imRight(){
  document.getElementById('thingone').innerHTML = '<h1>Yes</h1> '+"<h1>I'm right</h1>"
}

function noImRight(){
  document.getElementById('thingone').innerHTML ='<h1>Yes</h1> '+"<h1>No, I'm right!</h1>"
}

//2. Create an HTML page with a large element on the page that says
//"Don't hover over me" inside of it. When you hover over the element,
//send an alert to the user that says, "Hey, I told you not to hover over me!"

var dontHover = document.getElementById('Hover');

dontHover.addEventListener('mouseenter', punish);

function punish(){
  alert('Hey I told you not to hover over me!');
}


//3.Create an HTML page with javascript that listens for a keypress.
//When the user presses that key, the text of the H1 should show the
//value of the key they have pressed.
//Example: If the user presses "J", the text inside the H1 should be "J".

/*
//TYLER'S CODE

document.getElementById('bodypart').addEventListener("keypress",
//the javascript says 'check the document
//and look for an element with this id'
  //that id being 'bodypart' which is attatched to the body tag
//next, while focusing on the bodypart, the javascript says
//listen for this specific event, that event being a keypress
  function(event) { //upon that keypress, the javascript then says
    //hey activate this function. 'event' is just the default it can be changed
    var letter = String.fromCharCode(event.charCode);
    //within the function a variable is defined called letter.
      //the variable 'letter' equals a string. That string is taken from a character code
      //each key has a character code. When a key is pressed,
      //the javascript, which is looking at the document and within the body,
      //and is listening for that key, then sees the character code.
      //The string is then taken from that character code which represents a key.
    //the variable of 'letter' then changes to the key
    document.getElementById('header').innerHTML = "I typed " + letter;
      //then the javascript looks back into the html document,
      //gets the element represented by the id of 'header'
      //looks inside its html with innerHTML, and changes it.
        //
}
)

*/

//DYLAN'S CODE

var header = document.getElementById("header")

window.addEventListener("keypress",function(event){
  header.innerHTML = "<h1>"+event.key+"</h1>"
})




//4.Create an HTML page with a form. The form should include inputs for a username, email, and
//password as well as a submit button.

//In a Javascript file, write code that does the following things:

//checks that the password is 12345678

//checks that the username contains at least one number

//if anything is wrong, send an alert message saying "incorrect"


//DYLAN'S CODE

var header = document.getHelementByID("header")

function checkPassword(){
  var password = document.getElementByID("password").value

  if (password =="12345678") {
     return true
  } else{
    return false
  }
}

function checkUsername(){
  var username = document.getElementById("username").value
  var characters = username.split("")
  var presence = characters.map(function(element){
    return Number.isInteger(parseInt(element))
  })

  if (presence.indexOf(true) !== -1){
    return true
  }else{
    return false
  }
}

function validateForm(){
  if(checkPassword()==true && checkUsername ==true){
    header.innerHTML = "<h1>You're now logged in!</h1>"
  }else{
    alert("Incorrect!")
  }
}






//Your page should also include an H1 tag. If the information in
//the form is correct, have Javascript change the text in the H1.
