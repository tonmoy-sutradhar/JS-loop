const numbers = [10, 14, 15, 18, 42, 78, 65, 41, 100, 250, 300];
console.log(numbers);

console.log("This is for loop ------->");
for (const num of numbers) {
  console.log(num);
}

// Example for fruits------>
const fruits = ["Apple", "Mango", "Banana", "Orange"];
console.log(fruits);

for (fruit of fruits) {
  console.log(fruit);
  console.log("I want to eat " + fruit);
}
