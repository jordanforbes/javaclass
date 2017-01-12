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

var header = document.getElementById("header")
//the variable header tells the html to look inside the document
//look for an element with the id 'header'
var button = document.getElementById("login-button")
//the variable button tells the html to look inside the document
//look for an element with the id 'login-button'

//declare a header variable and a button variable

button.addEventListener("click", function() {
  validateForm()
})
//listen inside the variable 'button' for the event 'click',
//and when the click is heard use the function which calls
//the other function 'validateForm()'

function validateForm(){
//declare the function 'validateForm'
  if(checkPassword() == true && checkUsername() == true) {
    //checks inside the function 'checkpassword' to see if the answer is true
    //also checks the function 'checkUsername' to see if that answer is true
    header.innerHTML = "<h1>You're now logged in!</h1>"
    //if both are true then the javascript looks inside the header,
    //inside the HTML text within the header, and tells the html that
    //that text is now <h1>You're now logged in!</h1>
  } else {
    //if only one or neither are true, then...
    alert("Incorrect!")
    //send an alert announcing that it was incorrect
  }
}

function checkPassword() {
//declare the function "checkPassword"
  var password = document.getElementById("password").value
  //within the function checkPassword, declare the variable "password"
  //that variable tells the html to look inside the document,
  //inside the document, the javascript then tells the html to look for the
  //element with the id of "password" and to look inside it to find the value
  if (password == "12345678") {
    //if the value of the pasword is 12345678...
     return true
     //then say that it's true, if the value is not that...
  } else {
    //then say that it's false.
    return false
  }
}
//this "true" or "false" gets sent to the function "validateForm" to check the password

function checkUsername() {
//declare the function "checkUsername"
  var username = document.getElementById("username").value
  //within the checkUsername function, decalre the variable "username"
  //the variable "username" tells the HTML to look inside the document
    //within the document, look for an element with the id of "username"
      //within that element look for its value
  var characters = username.split("")
  //within the checkUsername function, declare the variable "characters"
  //the variable "characters" tells the HTML to look inside the "username" variable
    //split the variable string up and add quotations. possibly. Ask Dylan what that does.
  var presence = characters.map(function(element) {
  //within the checkUsername function, declare the variable "presence"
  //the variable "presence" tells the HTML to look inside the variable "characters"
    //look inside its map? Ask Dylan.
    return Number.isInteger(parseInt(element))
  })

  if (presence.indexOf(true) !== -1) {
    return true
  } else {
    return false
  }
}

//periods add properties which tell the html to look inside something






//Your page should also include an H1 tag. If the information in
//the form is correct, have Javascript change the text in the H1.
