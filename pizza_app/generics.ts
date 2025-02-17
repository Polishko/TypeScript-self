const gameScores = [43, 42, 57, 69];
const favoriteThings = [
  "kittens and puppies",
  "morning coffee",
  "mountain hike",
  "music",
];
const voters = [
  { name: "Elena", age: 32 },
  { name: "Taner", age: 45 },
];

// Generics: placeholder for type (similar to parameter(s) of a function ); Convention: Type or T
function getLastItem<Type>(array: Type[]): Type | undefined {
  return array[array.length - 1];
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
