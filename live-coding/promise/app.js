function createTimeoutPromise(callback, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback();
      resolve();

    }, delay)
  });
}

function printDelayedGreetings(greetingCallbacks, callback) {

  let promises = [
    createTimeoutPromise(greetingCallbacks[0], 2000),
    createTimeoutPromise(greetingCallbacks[1], 700),
    createTimeoutPromise(greetingCallbacks[2], 2000),
    createTimeoutPromise(greetingCallbacks[3], 3000)
  ]

  Promise
    .all(promises)
    .then(callback);
}

let greetingCallbacks = [
  () => console.log("Hello"),
  () => console.log("Hey batman"),
  () => console.log("Hey awesome"),
  () => console.log("Hey Apple")
];

printDelayedGreetings(greetingCallbacks, () => {
  console.log("all done");
});

console.log("hey batman v2");


// let pelleDidLaundry = true;

// let pellePromise = new Promise((resolve, reject) => {
//   if (pelleDidLaundry) {
//     resolve(); // <-- then
//   } else {
//     reject(); // <-- catch
//   }
// });


// pellePromise
//   .then(() => console.log("Pelle is playing in the yard"))
//   .then(() => console.log("A friend showed up"))
//   .then(() => console.log("Then they played together"))
//   .catch(() => console.log("Pelle had to do laundary still"))