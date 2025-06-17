const nameError = document.querySelector('#name-error')
const phoneError = document.querySelector('#phone-error')
const emailError = document.querySelector('#email-error')
const messagesError = document.querySelector('#messages-error')
const submitError = document.querySelector('#Submit-error')


function validateName(){
    const name = document.getElementById('contact-name').value;
    
    if(name.length == 0){
        nameError.innerHTML = 'name is required';
        return false;
    }
    if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
        nameError.innerHTML = 'write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    const phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'number is required';
        return false;

    }
   else if(phone.length !== 10){
        phoneError.innerHTML = 'should be 10 digits';
        return false;

    } 
   else if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'only digits please';
        return false;

    } else {
        phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function validateEmail(){
    const email = document.getElementById('contact-email').value;

    if(email.length === 0){
        emailError.innerHTML = 'Email is required';
        return false;

    } else if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = 'invalid email';
        return false;

    } else {
        emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function validateMessage(){
    const message = document.querySelector('#contact-message').value;
    const required = 20;
    const left = required - message.length;

    if(left > 0){
        messagesError.innerHTML = left + ' more characters required';
        return false;
    }
    else{
        messagesError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}


function validateForm(){
    if(!validateName() || !validatePhone() ||! validateEmail() || !validateMessage()){
        submitError.innerHTML = 'Please fix errors to submit';
        return false;

    } else {
        alert('Form submitted successfully');

        submitError.innerHTML = ' ';
        return true;
    }
}