



function homePage(){

        let main = document.getElementById("main")

        let red = document.createElement("div")
        main.appendChild(red)
        red.classList.add("red")

        let small1 = document.createElement("div")
        red.appendChild(small1)
        small1.classList.add("div1")

        let indiv = document.createElement("div")
        small1.appendChild(indiv)
        indiv.classList.add("aqua")

        let result =  product.filter(item => item.id <= 2);
                    let img = document.createElement("img");
                    img.src = result[0].img;
                    indiv.appendChild(img)
                    console.log(img);

        let pastki = document.createElement("div")
        small1.appendChild(pastki)
        pastki.classList.add("bottom")

        let h1 = document.createElement("h1")
        pastki.appendChild(h1)
        h1.innerText = result[0].name;
        h1.classList.add("h1")

        let h2 = document.createElement("h2")
        pastki.appendChild(h2)
        h2.innerText = result[0].price;
        h2.classList.add("h1")



        let small2 = document.createElement("div")
        red.appendChild(small2)
        small2.classList.add("div1")

        let indiv1 = document.createElement("div")
        small2.appendChild(indiv1)
        indiv1.classList.add("aqua")

        let result1 =  product.filter(item => item.id <= 2);
                    let img1 = document.createElement("img");
                    img1.src = result1[1].img;
                    indiv1.appendChild(img1)
                    console.log(img1);

        let pastki1 = document.createElement("div")
        small2.appendChild(pastki1)
        pastki1.classList.add("bottom")
        
        
        let h11 = document.createElement("h1")
        pastki1.appendChild(h11)
        h11.innerText = result[1].name;
        h11.classList.add("h1")

        let h22 = document.createElement("h2")
        pastki1.appendChild(h22)
        h22.innerText = result[1].price;
        h22.classList.add("h1")

        let small3 = document.createElement("div")
        red.appendChild(small3)
        small3.classList.add("div1")

        let indiv2 = document.createElement("div")
        small3.appendChild(indiv2)
        indiv2.classList.add("aqua")

        let result2 =  product.filter(item => item.id <= 3);
                    let img2 = document.createElement("img");
                    img2.src = result2[2].img;
                    indiv2.appendChild(img2)
                    console.log(img2);

        let pastki2 = document.createElement("div")
        small3.appendChild(pastki2)
        pastki2.classList.add("bottom")
        
        
        let h111 = document.createElement("h1")
        pastki2.appendChild(h111)
        h111.innerText = result2[2].name;
        h11.classList.add("h1")

        let h222 = document.createElement("h2")
        pastki2.appendChild(h222)
        h222.innerText = result2[2].price;
        h222.classList.add("h1")








        
        
        // let blue = document.createElement("div")
        // main.appendChild(blue)
        // blue.classList.add("blue")
        
        
    
}


homePage()




