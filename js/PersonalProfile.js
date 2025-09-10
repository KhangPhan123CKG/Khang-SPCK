let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let date = document.getElementById("date");
let phone = document.getElementById("phone")
if (currentUser) {
    document.getElementById("name").textContent = currentUser.username || "";
    document.getElementById("email").value = currentUser.email || "";
    document.getElementById("gender").value = currentUser.gender || ""
    document.getElementById("date").value = currentUser.date || "";
    document.getElementById("phone").value = currentUser.phone || "";
}

saveChangeBtn.addEventListener("click", function() {
    let users = JSON.parse(localStorage.getItem("users"));
    let index = users.findIndex(user => user.username === currentUser.username);
    users[index].date = date.value;
    users[index].phone = phone.value;
    currentUser.date = date.value;
    currentUser.phone = phone.value;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem("users", JSON.stringify(users));   
    alert("Changes saved!");

});