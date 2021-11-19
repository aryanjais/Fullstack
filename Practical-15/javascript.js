var username=document.getElementById('username');
var email=document.getElementById('email');
var password1=document.getElementById('password1');
var password2=document.getElementById('password2');
var check=document.getElementsByClassName('fa-check-circle');
var exclamation = document.getElementsByClassName('fa-exclamation-circle');
for(i=0;i<check.length;i++){
    exclamation[i].style.display='none'
    check[i].style.display='none'
}
function validate(){
    var usererror=document.getElementById("usernameerror");
    var emailerror=document.getElementById('emailerror');
    var password1error=document.getElementById('password1error'); 
    var password2error=document.getElementById('password2error');
    if(username.value==""){
        usererror.innerHTML="username cannot be blank";
        username.style.border="3px solid red"
        exclamation[0].style.display='inline'
        check[0].style.display='none'
        event.preventDefault()

    }
    if(email.value==""){
        emailerror.innerHTML="Email id cannot be blank";
        email.style.border="3px solid red"
        exclamation[1].style.display='inline'
        check[1].style.display='none'
        event.preventDefault()
    }
    if(password1.value==""){
        password1error.innerHTML="password cannot be blank";
        password1.style.border="3px solid red"
        exclamation[2].style.display='inline'
        check[2].style.display='none'
        event.preventDefault()
    }
    if(password2.value=="" || password2.value!=password1.value){
        password2error.innerHTML="password cannot be blank";
        if(password1.value!=password2.value && password2.value!=""){
            password2error.innerHTML="password did not match";
        }
        password2.style.border="3px solid red"
        exclamation[3].style.display='inline'
        check[3].style.display='none'
        event.preventDefault()
    }
}

function usernametype(){
        username.style.border="3px solid green"
        usernameerror.innerHTML="";
        check[0].style.display='inline'
        exclamation[0].style.display='none'

}
function emailtype(){
        email.style.border="3px solid green"
        emailerror.innerHTML="";
        check[1].style.display='inline'
        exclamation[1].style.display='none'

    
}
function password1type(){
        password1.style.border="3px solid green" 
        password1error.innerHTML="";       
        check[2].style.display='inline'
        exclamation[2].style.display='none'

}
function password2type(){
        password2.style.border="3px solid green"
        password2error.innerHTML="";
        check[3].style.display='inline'
        exclamation[3].style.display='none'

    
}