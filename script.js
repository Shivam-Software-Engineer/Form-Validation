document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");

    emailError.innerText = "";
    passwordError.innerText = "";
    confirmPasswordError.innerText = "";

    let isValid = true;


    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.innerText = "Invalid email format";
        isValid = false;
    }

  
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.innerText = "Password must be 8+ characters with 1 uppercase & 1 number";
        isValid = false;
    }

  
    if (password !== confirmPassword) {
        confirmPasswordError.innerText = "Passwords do not match";
        isValid = false;
    }


    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("signupForm").reset(); // Reset form after successful validation
    }
});
