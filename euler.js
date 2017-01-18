//Create an object called multipler with two methods:
//multiply and getCurrentValue. multiply should initially
//return the number supplied * 1 and from then on whatever
//the current value is times the number supplied. getCurrentValue
//should return the last answer returned from multiply.

/*
var multiplier = {
	//declares variable "multiplier"
	//the variable is also an object
  multiply: function(num) {
	  //creates an attribute of the variable "multiplier" called "multiply."
	  //that attribute declares a function with the parameter (num)
    this.currentValue *= num
	  //within the function it refers to this.currentValue which searches inside this object
	  //for the attribute "currentValue" and uses that attribute to multiply by the parameter "num"
	  //	"num" is passed in by the call function. At first the attribute "currentValue" is 1, so the first equation
	  //	is essentially num * 1
    return this.currentValue
	  //the answer of this.currentValue *=num is returned and placed inside the attribute "currentValue."
  },

  getCurrentValue: function() {
  	// declares attribute "getCurrentValue" which refers to a function
  	return this.currentValue
	//the function looks inside the object for the attribute "currentValue" returns the value of that attribute.
  },

  currentValue: 1
}
console.log(multiplier.multiply(5))
console.log(multiplier.multiply(5))
console.log(multiplier.multiply(5))
console.log(multiplier.currentValue)
*/

//Implement an object model that allows you to store strings that represent a Photo.
//Your model should include an Album object that can contain many Photo objects in its photos attribute.
	//I think this is implying that the photos attribute contains an array 
//Each Album should allow you to add a new photo,
//list all photos, and access a specific photo by the order it was added.
//Each Photo should store the photo's file name and the location the photo was taken in as strings.
//Create instances of each object defined to prove that your object model works

//create object model

/*
var album={

	Photo:function(fileName,place){
		this.fileName=fileName;
		this.place=place;
	},
	Image:function(fileName,place){
		return album.Photo(fileName,place);
	},
	ghosts: function(){
		return this.Photo("images/ghosts.jpg","Philadelphia");
		},
	me: function(){
		return this.Photo("images/me.jpg","Tyler School of Art");
		},
}
	function Photo(fileName,place){
	this.fileName=fileName;
	this.place=place;
}*/

var album(albumName,whatever){
	this.albumName = albumName,
	this.whatever = whatever
};

var Photo(fileName,place){
	fileName:fileName,
	place:place,
}

var ghosts = function(){

}
