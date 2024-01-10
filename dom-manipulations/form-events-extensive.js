// Creating selectors
let nameSelector = document.getElementById("full_name")
let emailSelector = document.getElementById("email")
let phoneSelector = document.getElementById("phone")
let genderSelector = document.getElementsByName("gender")
let ageSelector = document.getElementById("age")
let formSelector = document.getElementById("signupForm")
let submitBtn = document.getElementById("submitBtn")

emailSelector.addEventListener("focus", function(){
    console.log("Email textbox is focused")
})

emailSelector.addEventListener("blur", function(e){
    if(e.target.value.length==0){
        alert("Email Cannot be blank")
    }
})

emailSelector.addEventListener("change", function(e){
    let emailString = e.target.value
    if(String(emailString).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
    {
        submitBtn.disabled = false
        console.log("Valid Email")
    }
    else{
        submitBtn.disabled = true
        console.log("Invalid Email")
    }
})

emailSelector.addEventListener("keyup", function(e){
    let emailString = e.target.value
    if(String(emailString).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
    {
        submitBtn.disabled = false
        console.log("Valid Email")
    }
    else{
        submitBtn.disabled = true
        console.log("Invalid Email")
    }
})

formSelector.addEventListener("submit", function(e){
    e.preventDefault()
    let gendeVal;
    for (const gender of genderSelector) {
        if(gender.checked)    
        {
            gendeVal = gender.value;
        }
    }

    let userData = {
        full_name:nameSelector.value,
        email:emailSelector.value,
        phone:phoneSelector.value,
        gender:gendeVal,
        age:ageSelector.value
    }

    console.log(userData)
})