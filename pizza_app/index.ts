type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed"; // not any string but literal values
};

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;
const orderHistory: Order[] = [];

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

function addNewpizzaObj(pizzaObj: Omit<Pizza, "id">): Pizza {
  const newPizza = {
    id: nextPizzaId++,
    ...pizzaObj,
  };

  menu.push(newPizza);
  return newPizza;
}

function placeOrder(pizzaName: string): Pizza | undefined {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not wxist in the current menu`);
    return;
  }

  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };

  orderHistory.push(newOrder);
  return selectedPizza;
}

// Generics example
function addToArray<T>(array: T[], item: T): T[] | undefined {
  array.push(item);
  return array;
}

let orderQueue: Order[] = [];
addToArray(menu, { id: nextPizzaId, name: "Chicken Bacon Ranch", price: 12 });
addToArray<Order>(orderQueue, {
  id: nextOrderId++,
  pizza: menu[2],
  // status: "done",
  status: "completed",
});
// End of generics example

function completeOrder(orderId: number): Order | undefined {
  let orderItem = orderHistory.find((orderObj) => orderObj.id === orderId);
  if (!orderItem) {
    console.error(`Item with ${orderId} does not exist!`);
    return;
  }

  orderItem.status = "completed";

  return orderItem;
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
  // type narrowing

  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
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
