const sendMessage = document.querySelector('#sendMessage');
const userName = document.querySelector('#userName');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');
const message = document.querySelector('#message');


const phoneValidation = (phone) => {

    if(phone > 0 && phone.toString().length === 10 && !Number.isNaN(phone)){
        return true;
    }
    alert("Size of phone must be 10 numbers and number must be positive");
     

}
const emailValidation = (email) => {
    //taken from the internet - https://www.w3resource.com/javascript/form/email-validation.php
   
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)? true : alert("Not valid email");
}
const clearInputs = () => {
    const userInput = [userName, email, phoneNumber, message];
    for (const input of userInput) {
        input.placeholder = input.value ='';
    }
}
const checkIsEmpty = () => {
    const userInput = [userName, email, phoneNumber, message];
    let pass = true;
    for (const input of userInput) {
        if(input.value === ''){
            input.style.border = "2px solid red";
            input.placeholder  = "Fill this**";
            pass = false;
        }
        if(input.value != '' && (input.style.border = "2px solid red")){
            input.style.border = "2px solid gray";
        }
    }

    return pass;

}
const convertToJSON = (userName, email, phone, message) => {
    const result = JSON.stringify({'Name': userName, 'E-mail': email, 'Phone': phone, 'Message': message});
    console.log(JSON.parse(result));
} 
sendMessage.addEventListener('click', function(){
    if(checkIsEmpty()){
        if(emailValidation(email.value) && phoneValidation(phoneNumber.value)){
            alert("Successfully done, values are stored in json");
            convertToJSON(userName.value, email.value, phoneNumber.value, message.value);
            clearInputs();   
        }
    }
});
