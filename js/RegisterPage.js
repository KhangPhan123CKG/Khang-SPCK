let passWord = document.getElementById("password");
let eMail = document.getElementById("email");
let registerBtn = document.getElementById("registerBtn");
let userName = document.getElementById("username");



registerBtn.addEventListener("click", function(event) {
    event.preventDefault();
    let selected = document.querySelector('input[name="gender"]:checked');
    let number = /[0-9]/;
    let lowercase = /[a-z]/;
    let uppercase = /[A-Z]/;

    let email = eMail.value;
    let password = passWord.value;
    let username = userName.value;
    let gender = selected.value;

    if (email === "" || password === "" || username === "") {
        alert("Please fill in all fields.");
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
    }else if (!number.test(password)) {
        alert("Password must contain at least one number.");
    } else if (!lowercase.test(password)) {
        alert("Password must contain at least one lowercase letter.");
    } else if (!uppercase.test(password)) {
        alert("Password must contain at least one uppercase letter.");
    } else if (!selected) {
        alert("Please select your gender.");
    } else {
        if (localStorage.getItem("users")) {
            let users = JSON.parse(localStorage.getItem("users"));

            users.push({ username: username, email: email, password: password, gender: gender});
            localStorage.setItem("users", JSON.stringify(users));   
            
        } else {
            localStorage.setItem("users", JSON.stringify([{ username: username, email: email, password: password, gender: gender}]));
        }
        alert("Registration successful!");
        location.href = "../html/LoginPage.html";
    }
});


