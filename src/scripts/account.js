const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
    localStorage.setItem("isAuthenticated", false);
    window.location.href = "../index.html";
})