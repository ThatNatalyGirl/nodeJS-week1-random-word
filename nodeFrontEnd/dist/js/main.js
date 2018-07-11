"use strict";

console.log("Hey there");

//ajax GET request to localhost:1234
//put whatever it says in the h1

var content = document.querySelector("h1");

axios.get('http://localhost:1234').then(function (response) {
  console.log(response);
  content.innerHTML = response.data;
}).catch(function (error) {
  console.log(error);
});
//# sourceMappingURL=main.js.map
