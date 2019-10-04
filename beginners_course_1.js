//foreach
const shoppingList = ['bread', 'cups', 'books', 'pencils',
  'pulses', 'grapes', 'almond', 'towel',
  'milk', 'onion', 'chips'];
shoppingList.forEach(product => {
  // console.log(product)
}
);

//map
const modifyShoppingList = shoppingList.map(item => "new " + item);
//console.log(modifyShoppingList)


//filter
const filterList = shoppingList.filter(item => item === 'onion');
//console.log(filterList);


class vehicles {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  sayslist() {
    console.log("vehicle name " + this.name);
  }

}

//  const vehicleNew = new vehicles(["car, bus"], 2);
//  vehicleNew.sayslist();

class Price extends vehicles {
  constructor(name, wheels, amount, tax){
    super(name,wheels);
    this.amount = amount;
    this.tax = tax;
  }
}
const fullDetails =  new Price(["car, auto, cycle",  4,3,2]);
fullDetails.sayslist();


const prom = new Promise((resolve,reject)=>{
setTimeout(()=> {
resolve({user:"ed",pass:"46238742"});
},2000);
});

prom.then(data => {
console.log(data);
}
);





                                  //JavaScript ES6, ES7, ES8: Learn to Code on the Bleeding Edge (Full Course) - 
                                  // https://www.youtube.com/watch?v=nZ1DMMsyVyI&t=2137s 




//destructuring objects
const personalInfo = {
  firstname:  'nimisha',
  lastname: 'wilson',
  city: 'tcr'
}
const {firstname : fn, lastname : ln} = personalInfo;
console.log(fn)

//destructuring arrays
let [nameFirst, nameLast, nameMiddle] = ['ann', 'rose', 'paul'];
console.log(`fullname is ${nameFirst} ${nameLast} ${nameMiddle} `);


//object literal
function stateAndDistrict(state,district){
  const address = {state,district}
  console.log(address);
}
stateAndDistrict("kerala", "thrissur");


//for of loop
let income = [20, 30, 40];
let total = 0;
for(const incomes of income){
  console.log(`income ${incomes}`)
  total += incomes;
  console.log(`total ${total}`)
}


//spread operator
let example1 = [1,2,3,4];
let example2 = [...example1];
console.log(example2);

//rest operator
function addNumbers(...num){
console.log(num);
}
addNumbers(8,1,4,3,5);

//arrow functions
function sub(...number){
        let totalSubtarcted = number.reduce((x,y) =>  x-y );
        console.log(totalSubtarcted);
}
sub(15,5);


//includes
let testArray = [2,3,4,5];
//console.log(testArray.indexOf(0));
console.log(testArray.includes(2)); //includes will return a boolean value of true or false



//padStart() and padEnd
let testString =  'jovees';
console.log(testString.padStart(10,'a'));
console.log(testString.padEnd(10,'a'));


//sets
const exampleSet  = new Set([1,2,2,2,1,2,2,3,3,9]);
exampleSet.add(8)
console.log(exampleSet.has(2))
console.log(exampleSet.size)