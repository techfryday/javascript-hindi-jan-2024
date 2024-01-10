let form = document.getElementById("addItemForm")
let itemTextBox = document.getElementById("itemTextBox")
let mylist = document.getElementById("mylist")
form.addEventListener("submit", function(e){
    e.preventDefault()
    let listItem = "<li class='list-group-item'>"+itemTextBox.value+"</li>"
    mylist.innerHTML += listItem
})