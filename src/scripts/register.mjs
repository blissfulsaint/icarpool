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

    // Retrieve existing data from local storage (if any)
    const existingData = JSON.parse(localStorage.getItem('users')) || { users: [] };

    // Add the new user to the 'users' array
    existingData.users.push(newUser);

    // Store the updated data back in local storage
    localStorage.setItem('users', JSON.stringify(existingData));
})