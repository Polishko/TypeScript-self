// const menu = [
//   { name: "Margherita", price: 8 },
//   { name: "Pepperoni", price: 10 },
//   { name: "Hawaiian", price: 10 },
//   { name: "Veggie", price: 9 },
// ];

// let cashInRegister = 100;
// let nextOrderId = 1;
// let orderQueue = [];

// function addNewpizzaObj(pizzaObj) {
//   menu.push(pizzaObj);
// }

// function placeOrder(pizzaName) {
//   const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
//   if (selectedPizza) {
//     cashInRegister += selectedPizza.price;
//     const newOrder = {
//       id: nextOrderId++,
//       pizza: selectedPizza,
//       status: "ordered",
//     };
//     orderQueue.push(newOrder);
//   }

//   return selectedPizza;
// }

// function completeOrder(orderId) {
//   let orderItem = orderQueue.find((orderObj) => orderObj === orderId);
//   if (orderItem) orderItem.status = "completed";

//   return orderItem;
// }
