var cars = ["Saab", "Volvo", "BMW"];
//declare variable "cars"
  //within the variable is an array.
  //the array consists of three different strings.
  //at [0] is "Saab", at [1] is "Volvo", and at [2] is "BMW"
//this method allows us to store multple strings in one variable


var cars = new Array("Saab", "Volvo", "BMW");

//on the keyword "new":
  //It creates a new object. The type of this object, is simply object.
  //It sets this new object's internal, inaccessible, [[prototype]] (i.e. __proto__)
    //property to be the constructor function's external, accessible, prototype object (every function object automatically has a prototype property).
  //It makes the this variable point to the newly created object.
  //It executes the constructor function, using the newly created object whenever this is mentioned.
  //It returns the newly created object, unless the constructor function returns a non-null object reference.
    //In this case, that object reference is returned instead


//on objects:
var car = {type:"Fiat", model:"500", color:"white"};
//declares variable "car" which will serve as our object
  //within the variable is an array. Within that array are
    //"names" or attributes of that object.

    //car.type looks into the object "car",
      //into the attribute "type" which returns the value of "Fiat"

    //car.model looks into the object "car,"
      // into the attribute "model", and returns the value of "500"

      //objects are essentially variables with attributes
      //The values are written as name:value

      //JavaScript objects are containers for named values called properties or methods.


//my objects

var c = //the sound of C
var e = //the sound of E
var g = //the sound of G
var cMaj = {Root:c,Third:c, Fifth:c}
