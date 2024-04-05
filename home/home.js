




let main = document.getElementById("main")

let red = document.createElement("div")
main.appendChild(red)
red.classList.add("red")

let blue = document.createElement("div")
main.appendChild(blue)
blue.classList.add("blue")

let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");

div1.innerHTML = "salom"
red.appendChild(div1)
div1.classList.add("box")
console.log(div1);

div2.innerHTML = "salom"
red.appendChild(div2)
div2.classList.add("box")
console.log(div2);

div3.innerHTML = "salom"
red.appendChild(div3)
div3.classList.add("box")
console.log(div3);


let div4 = document.createElement("div");
let div5 = document.createElement("div");
let div6 = document.createElement("div");

div4.innerHTML = "salom"
blue.appendChild(div4)
div4.classList.add("box")
console.log(div4);

div5.innerHTML = "salom"
blue.appendChild(div5)
div5.classList.add("box")
console.log(div5);

div6.innerHTML = "salom"
blue.appendChild(div6)
div6.classList.add("box")
console.log(div6);






