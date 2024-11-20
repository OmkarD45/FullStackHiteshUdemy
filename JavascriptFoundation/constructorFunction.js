function Person(name,age){
    this.name=name
    this.age=age
}


function Car(company,model){
    this.company=company
    this.model=model
}

let myCar=new Car("Toyota","Fortuner");
// console.log(myCar);
let myNewCar=new Car("Tata","Safari");
// console.log(myNewCar);


function Tea(type){
    this.type=type;
    this.describe=function(){
        return `this is cup of ${this.type}`;
    }
}
let lemonTea=new Tea("Lemon Tea");
console.log(lemonTea.describe());

function Animal(Species){
    this.Species=Species
}
Animal.prototype.sound=function(){
    return `${this.Species} makes sound`;
}
let dog=new Animal("Dog");
console.log(dog.sound());

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name=name;
}

let tea=new Drink("tea");
let coffee=Drink("coffee");