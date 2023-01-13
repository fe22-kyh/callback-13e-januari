// fetch("message.txt")
//   .then(resp => resp.text())
//   .then(data => console.log(data));

function fetchText(path) {
  return fetch(path)
    .then(resp => resp.text())
    .catch(err => console.log(err))
}

// // let messagePromise = fetch("message.txt").then(resp => resp.text());
//let messagePromise = fetchText("message.txt");

fetchText("message.txt")
  .then(data => console.log(data));


