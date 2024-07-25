let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");



btn.addEventListener("click",function(){
    let list = document.createElement("li");
    list.innerText = inp.value;
    if(inp.value==""){
        alert("Write Something.....");
    }else{
        let delBtn = document.createElement("button");
        delBtn.innerText = "delete";
        delBtn.classList.add="delete"
        list.appendChild(delBtn);
        ul.appendChild(list);
    } 
    inp.value="";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})

// let delBtns = document.querySelector(".delete");

// for( delts of delBtns){
//     delBtns.addEventListener("click",function(){
//         console.log("item delete");
//     })
// }

