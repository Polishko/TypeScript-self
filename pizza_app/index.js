"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPizzaDetail = getPizzaDetail;
var menu = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
];
var cashInRegister = 100;
var nextOrderId = 1;
var orderHistory = [];
function addNewpizzaObj(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " does not wxist in the current menu"));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderHistory.push(newOrder);
    return selectedPizza;
}
function completeOrder(orderId) {
    var orderItem = orderHistory.find(function (orderObj) { return orderObj.id === orderId; });
    if (!orderItem) {
        console.error("Item with ".concat(orderId, " does not exist!"));
        return;
    }
    orderItem.status = "completed";
    return orderItem;
}
function getPizzaDetail(identifier) {
    // type narrowing
    var property = typeof identifier === "number" ? "id" : "name";
    var pizzaObj = menu.find(function (pizza) {
        return typeof identifier === "string"
            ? pizza[property] === identifier.toLowerCase()
            : pizza[property] === identifier;
    });
    if (!pizzaObj) {
        console.error("Pizza with ".concat(identifier, " not found"));
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
