let currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (currentUser) {
    document.getElementById("name").textContent = currentUser.username;
    document.getElementById("email").value = currentUser.email;
}