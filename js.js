let userNameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let text = document.querySelector("#text")
let usernameMessage = document.querySelector('.username-validition')
let passwordMessage = document.querySelector('.password-validition')


function btnfun(){
    // alert('great')
    let userNameValue = userNameInput.value
    let passwordValue = passwordInput.value
    if (userNameValue.length < 12 || passwordValue.length < 8){
        text.style.display = 'block'
        text.style.color ='red'
        text.innerHTML = "لطفا اطلاعات را درست وارد کنید"
    }else{
        text.style.display = 'block'
        text.style.color ='green'
        text.innerHTML = "با موفقیت وارد شدید"
    }
    setTimeout(function(){
        text.style.display = 'none'
    }, 3000)
}

function usernameValidation(){
    // alert('username')
    if(userNameInput.value.length < 12){
        usernameMessage.style.color = 'red'
        usernameMessage.style.display = 'block'
        usernameMessage.innerHTML = 'must be 12 charracter'
    } else {
        usernameMessage.style.color = 'green'
        usernameMessage.innerHTML ='correct'
    }
}
function passwordValidation(){
    // alert('username')
    if(passwordInput.value.length < 12){
        passwordMessage.style.color = 'red'
        passwordMessage.style.display = 'block'
        passwordMessage.innerHTML = 'must be 8 charracter'
    } else {
        passwordMessage.style.color = 'green'
        passwordMessage.innerHTML ='correct'
    }
}
