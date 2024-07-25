// let btn = document.querySelector("button");

// btn.dblclick = function(){
//     console.log("hi i am clicked!");
// }

// btn.addEventListener("scroll",function(){
//     console.log("hi i am clicked");
// })

// btn.addEventListener("click",function(){
//     btn.style.backgroundColor="green";
// })


let head=document.querySelector("h2");
let input=document.querySelector("input");

head.addEventListener("keypress",function(event){
    console.dir(event)
})

input.addEventListener("input",function(event){
    console.log(input.value);
    head.innerText = input.value;
})
