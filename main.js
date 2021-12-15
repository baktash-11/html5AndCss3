class Vehicle{
    constructor(wheels){this.wheels= wheels}
    toString(){
        
        return 'Wheels: (' + this.wheels + ')';
    }
    
}

class Car extends Vehicle{
    constructor(color){
        super(4)
        this.color = color; 

    }
    toString(){
        return super.toString() + ' colored:  ' + this.color ;
    }
}

let myCar = new Car('White')

console.log(myCar.toString());
console.log(myCar instanceof Car);
console.log(myCar instanceof Vehicle);
console.log("===========================Default, rest and Spread===========================");
console.log("===========================Default parameter value Example===========================");
function add(x, y =0){/**y would be set to 0 if a value is not passed */
    return x + y; 
}
console.log(add(3));
console.log(add(3, 7));
console.log("=========================== Rest Example ===========================");

function userFriends(user, ...friends){/**will alow to pass an array as trailing arguments */
    console.log(`${user} has ${friends.length} friends`);

}
 userFriends("Fahim", "Yama", "Samim", "Ahamad", "Baktash");

 console.log("=========================== Spread Example ===========================");
 function directions(...args) {
   let [start, ...remaining] = args;
   let [finish, ...stops] = remaining.reverse();
   //
   console.log(`drive through ${args.length} towns`);
   console.log(`start in ${start}`);
   console.log(`the destination is ${finish}`);
   console.log(`stopping ${stops.length} times in between`);
 }
 directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma"); 
 console.log("=========================== Returning object  ===========================");

 const person =(fName, lName)=>({/**this function will return an object of person */
     first:fName, 
     last:lName
 });
 console.log(person('Baktash','Sana' ))
 console.log("=========================== =========== ===========================");
 const [fristAnimal] = ['Horse', 'Mouse', 'Cat'];
 console.log(fristAnimal);

 const [, ,thirdAnmail] =['Horse', 'Mouse', 'Cat'];
console.log(thirdAnmail);
console.log("=========================== =========== ===========================");

const name = "Tallac";
const elevation = 9738;
const funHike = { name, elevation };
console.log(funHike); 
console.log("=========================== =========== ===========================");
fetch("https://api.randomuser.me/?nat=US&results=1").then(res => console.log(res.json()));

fetch("https://api.randomuser.me/?nat=US&results=1")
.then(res => res.json())
.then(json => json.results)
.then(console.log)
.catch(console.error);

console.log("=========================== =========== ===========================");
const getFakePerson = async () => {
    try {
    let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
    let { results } = res.json();
    console.log(results);
    } catch (error) {
    console.error(error);
    }
    };
    getFakePerson();

console.log('https://www.youtube.com/watch?v=DHvZLI7Db8E');



console.log("=========================== using Fetch ===========================");

fetch('https://reqres.in/api/users?page=1')
  .then(response => response.json())
  .then(json => console.log(json))

console.log("=========================== end ===========================");
    
console.log("=========================== Destructuring ===========================");
function foo(){
    return [1,2,4];
}
  





