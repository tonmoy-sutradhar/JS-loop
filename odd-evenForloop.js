// -----------EVEN NUMBER---------------------->
// for (let i = 1; i <= 20; i+=2)
for (let i = 1; i <= 20; i++) {
  console.log(i);

  if (i % 2 === 0) {
    console.log("The number is Even:", i);
  }
  // else {
  //   console.log("The number is odd:", i);
  // }
}

// ---------ODD NUMBER------------->
for (let i = 1; i <= 20; i++) {
  console.log(i);

  if (i % 2 != 0) {
    console.log("The number is odd :", i);
  }
  // else {
  //   console.log("The number is Even :", i);
  // }
}

// ---------number Decrement------------->
console.log("Decrement number-------->");
for (let i = 10; i >= 0; i--) {
  console.log(i);

  // if (i % 2 != 0) {
  //   console.log("The number is odd :", i);
  // }
  // else {
  //   console.log("The number is Even :", i);
  // }
}
