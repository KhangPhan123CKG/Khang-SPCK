if (localStorage.getItem("currentUser")) {
    location.href = "../html/HomePage.html";
}

let form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (!localStorage.getItem("users")) {
        alert("User not found.");
    } else {
        let users = JSON.parse(localStorage.getItem("users"));

        let email = document.getElementById("email");
        let password = document.getElementById("password");

        let existingUser = users.find(
            (index) => 
                index.email === email.value.trim() &&
                index.password === password.value.trim()
        );

        if (existingUser) {
            localStorage.setItem("currentUser", JSON.stringify(existingUser));
            location.href = "../html/HomePage.html";
        } else {
            alert("Wrong email or password.");
        }
    }
});