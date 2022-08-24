
// console.log("hi")

const emailData = document.getElementById("email");
console.log(emailData.value)
const passData = document.getElementById("password");
var result = document.getElementById('login')
const form = document.getElementById("sign-up");

form.addEventListener("submit", (e) => {
    var userData = window.localStorage.getItem("userData")
    var data = JSON.parse(userData)
    console.log("hi")

    if (userData == null) {
        result.innerHTML = 'wrong Email';
    }
    else if (emailData == data.emailData.value && passData == data.passData.value) {
        result.innerHTML = "Logged in"
    }
    else {
        result.innerHTML = 'wrong Password'
    }



    togglePassword.addEventListener('click', (e) => {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash')
    })
})








