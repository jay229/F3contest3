
const user = JSON.parse(localStorage.getItem('user'))
if (user != null) {
    const child = document.getElementById("ch1");
    child.innerHTML = `
           <p id="user-name" class="profile-data">Full Name : ${user.name}</p>
           <p id="user-email" class="profile-data">Email : ${user.email}</p>
           <p id="user-pwd" class="profile-data">Password : ${user.password}</p>
        `;
}


function logout() {
    localStorage.clear();
    window.location.href = "profile.html";
}
function showProfile() {
    const user1 = JSON.parse(localStorage.getItem('user'))
    if(user==null){
        window.location.href = "index.html";
    }
    else{
        window.location.href = "profile.html";
    }
}
const profile=document.getElementById("profile");
profile.addEventListener("click",showProfile)
document.getElementById("signup").addEventListener("click",showProfile)