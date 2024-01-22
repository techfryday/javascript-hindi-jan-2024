let flexible = document.getElementById("flexible")
let allButtons = document.getElementsByClassName("button")
let buttonContent;
for (const currentButton of allButtons) {
    currentButton.addEventListener("click", (e)=>{
        buttonContent = e.target.innerText
        if(buttonContent=="Circle"){
            flexible.classList.remove("square", "rectangle", "thin-verticle", "thin-horizontal")
            flexible.classList.add("circle")
        }
        else if(buttonContent=="Square"){
            flexible.classList.remove("circle", "rectangle", "thin-verticle", "thin-horizontal")
            flexible.classList.add("square")
        }
        else if(buttonContent=="Rectangle"){
            flexible.classList.remove("circle", "square", "thin-verticle", "thin-horizontal")
            flexible.classList.add("rectangle")
        }
        else if(buttonContent=="Thin Verticle"){
            flexible.classList.remove("circle", "rectangle", "square", "thin-horizontal")
            flexible.classList.add("thin-verticle")
        }
        else if(buttonContent=="Thin Horizontal"){
            flexible.classList.remove("circle", "rectangle", "square", "thin-verticle")
            flexible.classList.add("thin-horizontal")
        }
        else if(buttonContent=="Shadow"){
            flexible.classList.toggle("shadow")
        }
    })    
}

