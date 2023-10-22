const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
    localStorage.setItem("userId", null);
    localStorage.setItem("isAuthenticated", false);
    window.location.href = "../index.html";
})