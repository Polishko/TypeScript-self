"use strict";
const menu = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
];
let cashInRegister = 100;
let nextOrderId = 1;
const orderHistory = [];
function addNewpizzaObj(pizzaObj) {
    menu.push(pizzaObj);
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
    const property = typeof identifier === "number" ? "id" : "name";
    const pizzaObj = menu.find((pizza) => typeof identifier === "string"
        ? typeof pizza[property] === "string" &&
            pizza[property].toLowerCase() === identifier.toLowerCase() // Ensure it's a string
        : pizza[property] === identifier);
    if (!pizzaObj) {
        console.error(`Pizza with ${identifier} not found`);
        return;
    }
    return pizzaObj;
}
addNewpizzaObj({ id: 5, name: "Spicy Sausage", price: 10 });
placeOrder("Spicy Sausage");
completeOrder(5);
completeOrder(1);
console.log(cashInRegister);
console.log(getPizzaDetail("Margherita"));
console.log(getPizzaDetail(4));
