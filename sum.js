let num = 1;
let sum = 0;

while (num <= 10) {
  console.log(num);
  sum = sum + num;
  console.log("Sum is: ", sum);
  num++;
}

// Using for loop-------->

// Give the sum of number from 1-10 divisible by 3;
let total = 0;
for (let i = 0; i < 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
    total = total + i;
  }
}

console.log("Total sum = ", total);
