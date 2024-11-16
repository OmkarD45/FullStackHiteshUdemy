let com = { cpu: 12 };
let lenovo = { screen: "HD", __proto__: com };
let tomHardware = {};
console.log(com);
console.log(`lenovo`, lenovo.__proto__); //dunder prototype
