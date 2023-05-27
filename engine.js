const f_name = document.getElementById("f-name");
const email = document.getElementById("email");
const pwd = document.getElementById("pwd");
const c_pwd = document.getElementById("c-pwd");
const signup_status = document.getElementById("signup-status");
const signup_btn = document.getElementById("signup-btn");



function generateRandomString() {
    var randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);

    var hexString = Array.from(randomBytes)
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');

    return hexString;
}

function submitData() {
    const token = generateRandomString();
    if (f_name.value == "" || email.value == "" || pwd.value == "" || c_pwd.value == "") {
        alert("Please fill all the fields!");
    }
    if (pwd.value !== c_pwd.value) {
        alert("Password is not confirmed!");
        pwd.value = "";
        c_pwd.value = "";
        return;
    }
    const user = {
        name: f_name.value,
        email: email.value,
        password: pwd.value,
        token: token
    }
    const userString = JSON.stringify(user);
    localStorage.setItem('user', userString)
    const user1 = JSON.parse(localStorage.getItem('user'))
    if (user1["token"] === token) {
        signup_status.style.display = "block";
        f_name.value="";
        email.value="";
        pwd.value = "";
        c_pwd.value = "";
        window.open('profile.html', '_blank');
       
    }
    else {
        signup_status.style.display = "block";
        signup_status.style.color = "red";
        signup_status.innerText = "Error : All the fields are mandatory";
    }


}

function showProfile() {
    const user1 = JSON.parse(localStorage.getItem('user'))
    if(user1==null){
        window.location.href = "index.html";
    }
    else{
        window.location.href = "profile.html";
    }
}
const profile=document.getElementById("profile");
profile.addEventListener("click",showProfile)
document.getElementById("signup").addEventListener("click",showProfile)
