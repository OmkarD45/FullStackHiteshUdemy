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