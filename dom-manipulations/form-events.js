// Using selector to select a html element
let clickable = document.getElementById("mybtn")

// Handling click event on clickable button
clickable.addEventListener("click", function(){
    console.log("You clicked the button!")
})

clickable.addEventListener("mouseenter", function(){
    console.log("Mouse has entered")
})

clickable.addEventListener("mouseleave", function(){
    console.log("Mouse has left")
})