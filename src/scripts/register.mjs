const registerForm = document.getElementById("register-form");
const registerButton = document.getElementById("register-form-submit");
const registerErrorMsg = document.getElementById("register-error-msg");

registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    const firstName = registerForm.firstName.value;
    const lastName = registerForm.lastName.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        username: null
    };

    // fetch('http://localhost:3000/users', {
    fetch("https://icarpool-api.onrender.com/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    })
        .then(response => response.json())
        .then(data => {
            if (data && data.id) {
                localStorage.setItem("isAuthenticated", true);
                window.location.href = 'index.html';
            } else {
                console.log(data);
            }
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        })
})