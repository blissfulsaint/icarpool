// export function addLoginModalFunctions() {
//     document.addEventListener("DOMContentLoaded", function() {
//         const openModalBtn = document.getElementById("openModalBtn");
//         const loginModal = document.getElementById("loginModal");
//         const closeModalBtn = document.getElementById("closeModalBtn");
//         const loginForm = document.getElementById("loginForm");
        
//         // Check the user's authentication status from local storage
//         const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
        
//         if (isAuthenticated) {
//             // Hide the login button if the user is authenticated
//             openModalBtn.style.display = "none";
//         } else {
//             openModalBtn.style.display = "block";
//         }
        
//         openModalBtn.addEventListener("click", function() {
//             loginModal.style.display = "block";
//         });
        
//         closeModalBtn.addEventListener("click", function() {
//             loginModal.style.display = "none";
//         });
        
//         loginForm.addEventListener("submit", function(event) {
//             event.preventDefault();
//             const username = document.getElementById("username").value;
//             const password = document.getElementById("password").value;
        
//             // Simulate user login success (you can replace this with your actual login logic)
//             if (username === "your_username" && password === "your_password") {
//                 localStorage.setItem("isAuthenticated", "true");
//                 openModalBtn.style.display = "none";
//                 alert("Login successful!");
//                 loginModal.style.display = "none";
//             } else {
//                 alert("Login failed. Please check your credentials.");
//             }
//         });

//         console.log("Applied event listeners");
//     })

//     console.log("Entered login modal function");
// };

export function addLoginModalFunctions() {
    // Function to handle login form submission
    function handleLoginFormSubmit(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulate user login success (you can replace this with your actual login logic)
        if (username === "your_username" && password === "your_password") {
            localStorage.setItem("isAuthenticated", "true");
            openModalBtn.style.display = "none";
            alert("Login successful!");
            loginModal.style.display = "none";
        } else {
            alert("Login failed. Please check your credentials.");
        }
    }
    const openModalBtn = document.getElementById("openModalBtn");

    // Function to handle modal opening
    function openLoginModal() {
        loginModal.style.display = "flex";
        loginModal.classList.add("fade-in");
    }

    function closeLoginModal() {
        loginModal.classList.remove("fade-in");
        loginModal.style.display = "none";
    }

    // Event delegation: Listen for clicks on the document
    document.addEventListener("click", function(event) {
        if (event.target.id === "openModalBtn" || event.target.closest("#loginButtonContainer")) {
            openLoginModal();
        }
        if (event.target.id === "closeModalBtn" || event.target === loginModal) {
            closeLoginModal();
        }
    });

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
