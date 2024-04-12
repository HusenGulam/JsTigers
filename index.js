







let row = document.getElementById("row");

let users = arr.filter( item => item.id <= 6);

    

users.forEach((item) =>{
    let h2 = document.createElement("h2");
    h2.innerHTML = item.name;
    h2.classList.add("title")

    let div = document.createElement("div");

    div.appendChild(h2);

    row.append(div);

    let email = document.createElement("p");
    email.innerHTML = item.email;

    let number = document.createElement("span");
    number.innerHTML = item.address.zipcode;

    div.append(email);
    div.append(number);

    div.classList.add("box");
    
    
 let searchBtn = document.getElementById("send");

 searchBtn.addEventListener("click",getName)

 function getName(){
    // let box = document.querySelectorAll(".box");
    let title = document.querySelectorAll(".title");
    let serachInp = document.getElementById("name");

    let result = arr.find(item => item.name == serachInp.value)
        if(result.name == serachInp.value){
            
            }
            // else{
            //     box.style.display = "none"
            // }
 }


})



