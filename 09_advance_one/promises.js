const promiseOne = new Promise(function (resolve, reject) {
  // Do an Async task
  // DB calls, cryptography, network calls
  setTimeout(function () {
    // console.log("Task 1 is completed");
    resolve(); // for connect with .then
  }, 1000);
});

promiseOne.then(function () {
    console.log("Promise is completed");
});

// Declare promise without variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Task 2 is completed");
    resolve();
  }, 1000);
}).then(function () {
    console.log("Promise 2 is completed");
});

// Pass Data with resolve
const promisThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "nitin",
      email: "nitin@1306gmail.com",
    });
  }, 1000);
});

promisThree.then(function (user) {
  // here .then and resolve are connected that's why we can pass data using any variable
    console.log(user);
});

// when resolve is rejected then use reject method
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "nitin", pass: "1234" });
    } else {
        reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

// using async and await

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", pass: "1234" });
    } else {
        reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const responce = await promiseFive;
    console.log(responce);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// fetch example
// async function getAllUsers() {
//   try {
//     const responce = await fetch("https://api.github.com/users/corenitin");
//     const data = await responce.json(); // json converts string into object
//     console.log(data);
//   } catch (error) {
//     console.log("ERROR", error);
//   }
// }
// getAllUsers();

//using .then .catch
fetch("https://api.github.com/users/corenitin")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
