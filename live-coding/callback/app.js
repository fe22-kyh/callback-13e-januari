function sayGreeting(name) {
  return () => "hello " + name;
}


//console.log(sayGreeting("Jakob"));

const printGreeting = sayGreeting;

//console.log(printGreeting("Yves"));

const callbackGreeting = printGreeting;

//console.log(callbackGreeting("Greta"));


// function writeGreetings(callback, times) {
//   for (let i = times; i > 0; i--) {
//     console.log(i, callback("Yves"));
//   }
// }

// writeGreetings(printGreeting("Greta"), 3);



// function printTimedOut() {
//   console.log("Timed out");
//   return "Hey hey";
// }

// function pResult(resp) {
//   console.log(resp);
// }

// let result;

// function printTimedOutAfter(delay, callback) {
//   setTimeout(() => {
//     result = printTimedOut();
//     callback(result);
//   }, delay);
// }

// printTimedOutAfter(2000, pResult)



// console.log(result);


function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}


let items = ["bilar", "flygplan", "blommor"];

//items.forEach(item => console.log(item));

function printItem(item, index) {
  console.log(item, index);
}

//forEach(items, (item, index) => console.log(index, item));
forEach(items, printItem);

//printItem("Hey", 2);

function printDelayedGreetings(greetingCallbacks, callback) {
  setTimeout(() => {
    greetingCallbacks[0]();
    setTimeout(() => {
      greetingCallbacks[1]();
      setTimeout(() => {
        greetingCallbacks[2]();
        setTimeout(() => {
          greetingCallbacks[3]();
          callback();
        }, 200);
      }, 700);
    }, 500);
  }, 2000);
  //setTimeout(greetingCallbacks[1], 1500);
  //setTimeout(greetingCallbacks[2], 2000);
  //setTimeout(greetingCallbacks[3], 3700);

  //setTimeout(callback, 4000);
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

//printDelayedGreeting(2000, () => console.log("Hello"));


