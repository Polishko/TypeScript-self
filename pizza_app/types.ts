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
type UserRole = "member" | "contributor" | "admin"; // strict type definition using union

type User = {
  id: number;
  username: string;
  role: UserRole;
};

type UpdatedUser = Partial<User>; // Utility type example
type NewUser = Partial<User>;

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id: nextUserId++, username: "john_smith", role: "contributor" },
  { id: nextUserId++, username: "jane_doe", role: "admin" },
  { id: nextUserId++, username: "guest_user", role: "member" },
];

function fetchUserDetails(username: string): User {
  const user = users.find(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );

  if (!user) {
    throw new Error(`The user with ${username} does not exist!`);
  }

  return user;
}

function updateUser(id: number, updates: UpdatedUser) {
  const user = users.find((user) => user.id === id);
  if (!user) {
    throw new Error(`User with id ${id} does not exist!`);
  } else {
    Object.assign(user, updates);
  }
}

function addNewUser(newUser: Omit<User, "id">): User {
  // Omit: provide all User props except the id as a string
  const user = {
    id: nextUserId++,
    ...newUser,
  };

  users.push(user);
  return user;
}

updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });
addNewUser({ username: "jane_smoe", role: "member" });
console.log(users);
