const form = document.getElementById('form');
const uname = document.getElementById('uname')
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const conpassword = document.getElementById('setpassword');
const checkbox = document. getElementById('box');
let click =document.getElementById('click')
 //funcation in cheack required
 let inputsArray = []
function checkRequired(inputs){
    
    inputs.forEach(input => {
        if(input.value.trim()===""){
            //error
            errorInput(input, `${getName(input)} is Required`)
            
        }else{
            //success
            successInput(input)
        }
    });

//funcation in data name call
}
function getName(input) {
    return input.getAttribute('data-name');    
}

//function in css call
function errorInput(input,message) {
    const name = input.parentElement;
    name.className = 'name error input';
    const h5=name.querySelector('h5');
    h5.innerHTML = message;   
}
//funcation call in css
function successInput(input) {
    const name = input.parentElement;
    name.className = 'name success input';
    const h5=name.querySelector('h5');
    h5.innerHTML = '';
}
//check in user name characters
function checkLength(input,min,max) {
    const data=input.value.trim().length;
    if (data<min !='') {
        errorInput(input, `${getName(input)}  aleast greater then ${min}characters`)
        return false
    }else if (data>max !='') {
        errorInput(input, `${getName(input)}  atleast lesser then ${max}characters`)
        return false
    } else {
        successInput(input)  
        return true
    }
}

    


function checkconfrimpassword(password,conpassword) {
    if(password.value !=conpassword.value) {
        errorInput(conpassword, `${getName(conpassword)}  password does not match`)  
    }
    
}



//funcation listener to event in calling
form.addEventListener('submit', function (e) {
        e.preventDefault();
        checkRequired([uname, email, phone, password, conpassword, checkbox]);
        
        checkLength(uname, 3, 15);
        checkLength(uname, 3, 15);
        checkLength(phone, 10, 10)
        checkLength(password, 6, 6);
        checkconfrimpassword(password,conpassword);
        
       


        if(checkLength(uname, 3, 15) && email.value != '' && checkLength(phone, 10, 10) && checkLength(password, 6, 6) && conpassword.value.trim() != '' && checkbox.checked == true)
        {
            if(password.value==conpassword.value)
            {
                let newUser = {
                    "uname":uname.value,
                    "email":email.value,
                    "phone":phone.value,
                    "password":password.value
                }
                let existUser = localStorage.getItem('Userdetails') ? JSON.parse(localStorage.getItem('Userdetails')) : [];
                existUser.push(newUser)
                localStorage.setItem('Userdetails',JSON.stringify(existUser))
                form.reset()
                window.location.href = 'index.html'
            }
            else{
                // alert('Password and Re-Password not match')
            }
        }
    });



