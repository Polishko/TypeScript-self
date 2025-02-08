// Custom
type Address = {
  city: string;
  street: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address; // Address prop optional
};

let person1: Person = {
  name: "Janna",
  age: 46,
  isStudent: true,
};

let person2: Person = {
  name: "Matte",
  age: 36,
  isStudent: false,
  address: {
    city: "Sofia",
    street: "Aleko 2b",
    country: "Bulgaria",
  },
};

function displayInfo(person: Person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person1);

let ages: number[] = [41, 34, 50, 25];
let people: Person[] = [person1, person2];

let myName = "Bob"; // generic string type
const myName3 = "Bob"; // literal type "Bob" and value is "Bob"
let myName2: "Bob" = "Bob"; // literal type "Bob" and can only have the literal type as a value

// Unions
type UserRole = "guest" | "member" | "admin"; // strict type definition using union
let user: UserRole = "admin";
