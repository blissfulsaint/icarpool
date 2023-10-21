export function addLoginModalFunctions() {
    console.log("entered addloginmodalfunctions function")
    // Function to handle login form submission

    function authenticateUser(email, password) {
        // const response = await fetch("../json/users.json");
        // const data = await response.json();
        // let users = data.users;

        let users = [
            {
                "firstName": "Brandon",
                "lastName": "Lisonbee",
                "email": "blisonbee213596@gmail.com",
                "password": "password",
                "username": null
            },
            {
                "firstName": "Logan",
                "lastName": "Huston",
                "email": "logan@gmail.com",
                "password": "password",
                "username": null
            },
            {
                "firstName": "Rai",
                "lastName": "Katsuragawa",
                "email": "rai@gmail.com",
                "password": "password",
                "username": null
            },
            {
                "firstName": "Kirsten",
                "lastName": "Beard",
                "email": "kirsten@gmail.com",
                "password": "password",
                "username": null
            }
        ]

        return users.find(user => user.email === email && user.password === password)
    }

    function handleLoginFormSubmit(event) {
        event.preventDefault();
        console.log("Form submitted");
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const authenticatedUser = authenticateUser(email, password);

        console.log("Event prevented:", event.defaultPrevented);

        // Simulate user login success (you can replace this with your actual login logic)
        if (authenticatedUser) {
            window.location.href = "../account/index.html";
        } else {
            alert("Login failed. Please check your credentials.");
        }
    }
    const openModalBtn = document.getElementById("openModalBtn");

    // // Function to handle modal opening
    // function openLoginModal() {
    //     loginModal.style.display = "flex";
    //     loginModal.classList.add("fade-in");
    // }

    // function closeLoginModal() {
    //     loginModal.classList.remove("fade-in");
    //     loginModal.style.display = "none";
    // }

    // Event delegation: Listen for clicks on the document
    // document.addEventListener("click", function(event) {
    //     if (event.target.id === "openModalBtn" || event.target.closest("#loginButtonContainer")) {
    //         openLoginModal();
    //     }
    //     if (event.target.id === "closeModalBtn" || event.target === loginModal) {
    //         closeLoginModal();
    //     }
    // });

    // Check the user's authentication status from local storage
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    if (isAuthenticated) {
        // Hide the login button if the user is authenticated
        openModalBtn.style.display = "none";
    } else {
        openModalBtn.style.display = "block";
    }

    // Handle form submission
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", handleLoginFormSubmit);

    console.log("Applied event listeners");
}
