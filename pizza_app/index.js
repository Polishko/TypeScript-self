"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPizzaDetail = getPizzaDetail;
let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;
const orderHistory = [];
const menu = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
];
function addNewpizzaObj(pizzaObj) {
    const newPizza = Object.assign({ id: nextPizzaId++ }, pizzaObj);
    menu.push(newPizza);
    return newPizza;
}
function placeOrder(pizzaName) {
    const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not wxist in the current menu`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderHistory.push(newOrder);
    return selectedPizza;
}
function completeOrder(orderId) {
    let orderItem = orderHistory.find((orderObj) => orderObj.id === orderId);
    if (!orderItem) {
        console.error(`Item with ${orderId} does not exist!`);
        return;
    }
    orderItem.status = "completed";
    return orderItem;
}
function getPizzaDetail(identifier) {
    // type narrowing
    if (typeof identifier === "string") {
        return menu.find((pizza) => pizza.name.toLowerCase() === identifier.toLowerCase());
    }
    else if (typeof identifier === "number") {
        return menu.find((pizza) => pizza.id === identifier);
    }
    else {
        throw new TypeError("The identifier must be a string or a number");
    }
}
addNewpizzaObj({ name: "Spicy Sausage", price: 10 });
placeOrder("Spicy Sausage");
completeOrder(5);
completeOrder(1);
console.log(cashInRegister);
// console.log(getPizzaDetail("Margherita"));
// console.log(getPizzaDetail(4));
console.log(menu);
