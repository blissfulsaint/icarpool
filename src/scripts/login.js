const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    async function authenticateUser(email, password) {
        try {
            const response = await fetch("../json/users.json");
            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }
            const data = await response.json();
            let users = data.users;

            return users.find(user => user.email === email && user.password === password);
        } catch (error) {
            console.error("Error: ", error);
            return null
        }

        // let users = [
        //     {
        //         "firstName": "Brandon",
        //         "lastName": "Lisonbee",
        //         "email": "blisonbee213596@gmail.com",
        //         "password": "password",
        //         "username": null
        //     },
        //     {
        //         "firstName": "Logan",
        //         "lastName": "Huston",
        //         "email": "logan@gmail.com",
        //         "password": "password",
        //         "username": null
        //     },
        //     {
        //         "firstName": "Rai",
        //         "lastName": "Katsuragawa",
        //         "email": "rai@gmail.com",
        //         "password": "password",
        //         "username": null
        //     },
        //     {
        //         "firstName": "Kirsten",
        //         "lastName": "Beard",
        //         "email": "kirsten@gmail.com",
        //         "password": "password",
        //         "username": null
        //     }
        // ]
    }

    const authenticatedUser = await authenticateUser(email, password);

    if (authenticatedUser) {
        window.location.href = "../account/index.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})