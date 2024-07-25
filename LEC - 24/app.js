const URL = "https://cat-fact.herokuapp.com/facts";
const para = document.querySelector("#para");
const btn = document.querySelector("#btn");
const catFact = async () => {

    let res = await fetch(URL);
    console.log(res);
    let data = await res.json();
    para.innerText = data[3].text;

};

btn.addEventListener("click",catFact);

