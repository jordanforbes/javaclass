//template literals are new ways to create strings
`they use the back tick,
or grave accent to be created`

let name = `Ryan`;
//creates variable "ryan"

console.log(`Hi my name is ${name}`);


let price = 19.99;
let tax = 1.13;

let total = `The total prices is ${price * tax}`;

let person = {
    firstName: `Ryan`,
    lastName: `Christiani`,
    sayName() {
        return `Hi my name is ${this.firstName} ${this.lastName}`;
    }
};
