let button = document.createElement("button");
let input = document.createElement("input");

button.innerText = "Click Me!";

document.querySelector("body").append(input);
document.querySelector("body").append(button);


button.setAttribute("id","btn");
input.setAttribute("placeholder","username");