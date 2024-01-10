/* getElementByID
getElementByClassName
getElementByName
getElementByTagName
querySelector
querySelectorAll */

let allButtons = document.getElementsByClassName("btn")

// for (const button of allButtons) {

//     button.addEventListener("click", function(e){
//         console.log(e.target.value)
//     })

// }

let allRows = document.getElementsByTagName("tr")
// console.log(allRows)

let bodyRows =  document.querySelectorAll("tbody tr")

let allDeleteButtons = document.querySelectorAll(".btn-danger")

for (const deleteButton of allDeleteButtons) {
    deleteButton.addEventListener("click", function(){
        console.log("Delete Button Clicked")
    })
}

