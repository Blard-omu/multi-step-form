const nameInput = document.getElementById("nameInput");
const emailInput = document.querySelector("#emailInput");
const phoneInput = document.querySelector("#phoneInput");
const nextBtn = document.querySelector("#nextBtn");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const phoneError = document.querySelector("#phoneError");

console.log(nameInput.value);
console.log(emailInput);
console.log(phoneInput);


// nameInput, nameError
nameInput.addEventListener("focus", function(){
    nameInput.style.border = "1px solid red";
})

nameInput.addEventListener("input", function(){
    const inputValue = nameInput.value.trim();
    if(inputValue.length >= 3){
        nameInput.style.border = "1px solid blue";
        nameError.innerHTML = ""
    }else if(inputValue.length === 0) {
        nameInput.style.border = "1px solid red";
        nameError.innerHTML = "This field is required"
    }else{
        nameInput.style.border = "1px solid red";
    }
});

nameInput.addEventListener("blur", function(){
    nameInput.style.border = "";
    nameError.innerHTML = "";
})

// emailInput, emailError
emailInput.addEventListener("focus", function(){
    emailInput.style.border = "1px solid red";
})

emailInput.addEventListener("blur", function () {
    emailInput.style.border = ""; 
    emailError.innerHTML = "";

  });

emailInput.addEventListener("input", function(){
    const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailValue.length >= 6 && emailRegex.test(emailValue)) {
        emailInput.style.border = "1px solid blue";
        emailError.textContent = "";
      }else if(emailValue.length <= 3){
        emailInput.style.border = "1px solid bred";
        emailError.textContent = "must be 6 characters long or more";
      }else {
        emailInput.style.border = "1px solid red";
        emailError.innerHTML = "Invalid email format";
      }
});

// phoneInput phoneError

phoneInput.addEventListener("focus", function () {
    if (phoneInput.value.trim().length !== 11 || isNaN(phoneInput.value.trim())) {
      phoneInput.style.border = "1px solid red";
    }
  });

  phoneInput.addEventListener("blur", function () {
    phoneInput.style.border = "";
    phoneError.textContent = "";

  });

  phoneInput.addEventListener("input", function () {
    const phoneValue = phoneInput.value.trim();

    if (phoneValue.length === 11 && !isNaN(phoneValue)) {
      phoneInput.style.border = "1px solid blue";
      phoneError.textContent = "";
    } else if (!isNaN(phoneValue) && phoneValue.length < 11 || phoneValue.length > 11) {
      phoneInput.style.border = "1px solid red";
      phoneError.textContent = "Enter a valid phone number";
    } else {
        phoneInput.style.border = "1px solid red";
      phoneError.textContent = "Invalid input";
    }
  });

 


