let rootElement = document.getElementById("root")

let allButtons = document.getElementsByClassName("control-button")

for (const btn of allButtons) {
    btn.addEventListener("click", function(e){
        let currentButtonContent = e.target.innerText
        if(currentButtonContent=="Circle"){
            rootElement.classList.remove("rectangle", "square")
            rootElement.classList.add("circle")
        }
        else if(currentButtonContent=="Rectangle"){
            rootElement.classList.remove("circle", "square")
            rootElement.classList.add("rectangle")
        }
        else if(currentButtonContent=="Square"){
            rootElement.classList.remove("circle", "rectangle")
            rootElement.classList.add("square")
        }
        else if(currentButtonContent=="Shadow"){
            rootElement.classList.toggle("shadow")
        }
        
    })
}


// let rootStyle = rootElement.style
// Object.assign(rootStyle, {
//     "background":"pink"
// })
