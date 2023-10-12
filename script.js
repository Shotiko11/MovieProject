let x = document.getElementById('login');
let y = document.getElementById('register');
let z = document.getElementById('btn');
let formBox = document.querySelector('.form-box');

let move = document.getElementById('move');
let unmove = document.getElementById('unmove');

let middle = document.getElementById('middle')

let registrationForm = document.getElementById('register');

let passwordField = document.getElementById('showHide');
let toggleIcon = document.getElementById('toggleIcon');
let emailField = document.getElementById('myemail');

emailField.addEventListener('keydown', function() {
    
    let mailValue = document.getElementById('myemail').value;

    let text = document.getElementById('textur');

    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //tu chawerili VALUE, emtxveva am "kods", mashin unda gamwvandes
    if(mailValue.match(pattern)) {
        emailField.style.borderBottom = '2px solid green';
        text.innerHTML = 'That is valid, Congrats';
        formBox.style.border = '1px solid green';
    }else{
        emailField.style.borderBottom = '2px solid red';
        text.innerHTML = 'Try with another email'
        formBox.style.border = '1px solid red';

    }
})

toggleIcon.addEventListener('click', function() {
    if(passwordField.type == 'password') {
        //roca davachert, PASSWORDFIELD-is TYPE gaxdeba TEXT(passwordis nacvlad)
        passwordField.setAttribute('type', 'text');
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
        
    }else{
        passwordField.setAttribute('type', 'password');
        toggleIcon.classList.remove('fa-eye-slash')
        toggleIcon.classList.add('fa-eye')

    }
})

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let errors = {};


    let formElement = event.target;

    //username
    let usernameValue = document.getElementById('username').value;

    
    if(usernameValue.length < 5) {
        errors.myusername = 'It must be more than 5 letters';
    }

    //password
    let password1 = document.getElementById('passw').value;
    let password2 = document.getElementById('passw2').value;
    
    if(password1 == ""){
        errors.mypassword = 'Password must be filled';
    }
    if(password1 != password2){
        errors.mypassword2 = 'passwords to not match'
    }

   //checkbox
   let agree = document.getElementById('agree').checked;

   if(!agree){
    errors.agree = "You have to agree on it"
   }

   console.log(errors);

   for(let item in errors) {
    let spanError = document.getElementById('error_' + item)
    if(spanError) {
        spanError.innerHTML = errors[item];

    
   }

   if(Object.keys(errors).length == 0) {
    formElement.submit();
   }

   formBox.style.height = "540px";
});

move.addEventListener('click', function() {
    y.style.display = "block";
    x.style.display = "none";
    formBox.style.height = "480px";
})

unmove.addEventListener('click', function () {
    y.style.display = "none"
    x.style.display = "block"
    formBox.style.height = "415px"
})

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

