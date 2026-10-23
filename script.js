const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const namePattern = /^[A-Za-z ]+$/;
    const mobilePattern = /^[0-9]{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/;

    if (name === "" || !namePattern.test(name)) {
        alert("Please enter a valid name using letters and spaces.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!mobilePattern.test(mobile)) {
        alert("Mobile number must contain exactly 10 digits.");
        return;
    }

    if (username === "") {
        alert("Please enter a username.");
        return;
    }

    if (!passwordPattern.test(password)) {
        alert(
            "Password must have at least 8 characters, including uppercase, lowercase, a number, and a special character."
        );
        return;
    }

    alert("Registration successful!");
    form.reset();
});