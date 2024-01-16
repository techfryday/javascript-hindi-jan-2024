let navigations = ["Home", "About Us", "Contact", "Support", "Services", "Clients"]

let rootElement = document.getElementById("root")

let ul = document.createElement("ul")
ul.setAttribute("class", "list")
let li;
navigations.forEach(element => {
    li= document.createElement("li")
    li.textContent = element
    li.setAttribute("class", "list-item")
    ul.appendChild(li)
});

rootElement.appendChild(ul)