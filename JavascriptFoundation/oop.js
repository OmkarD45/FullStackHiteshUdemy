let com = { cpu: 12 };
let lenovo = { screen: "HD", __proto__: com };
let tomHardware = {};
console.log(com);
console.log(`lenovo`, lenovo.__proto__); //dunder prototype

let genericCar={tyres:4}
let tesla={
    driver:"AI"
}
Object.setPrototypeOf(tesla,genericCar);
// console.log(`Tesla`,tesla.tyres);
console.log(`Tesla`,Object.getPrototypeOf(tesla));