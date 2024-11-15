// console.log("Hello");

function greet(name){
    console.log(`Hello ${name}`);
}

greet("Omkar");

function makeTea(type){
    return `Making ${type}`;
}
console.log(makeTea("Lemon Tea"));


function orderTea(type){
    function confirmOrder(){
        return `Order confirmed`;
    }
    return confirmOrder();
}
console.log(orderTea("Lemon Tea"));

// ___________________________________________________________
// Arrow Functions
const calculateTotal=(price,qty)=>{
    return price*qty;
}
console.log(`Total Price ${calculateTotal(200,5)}`);

// --------------------------------------------------Higher Order
function processTeaOrder(teaFunction){
    return teaFunction('earl grey');
}
console.log(processTeaOrder(makeTea));


function createTeaMaker(){
    return function (teaType){
        return `making ${teaType}`;
    };
}
let teaMaker=createTeaMaker();
console.log(teaMaker("Green Tea"));