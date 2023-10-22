const postForm = document.getElementById("post-form");
const postButton = document.getElementById("post-form-submit");

postButton.addEventListener("click", (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    const type = postForm.type.value;
    const startLocation = postForm.startLocation.value;
    const endLocation = postForm.endLocation.value;
    const startDate = postForm.startDate.value;
    const startTime = "T" + postForm.startTime.value;
    const seatsAvailable = postForm.seatsAvailable.value;

    const createdAt = "2023-10-21T17:30";

    const newPost = {
        createdAt: createdAt,
        userId: userId,
        type: type,
        startLocation: startLocation,
        endLocation: endLocation,
        startDate: startDate,
        startTime: startTime,
        seatsAvailable: seatsAvailable,
    };

    // fetch('http://localhost:3000/users', {
    fetch("https://icarpool-api.onrender.com/posts", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
    })
        .then(response => response.json())
        .then(data => {
            if (data && data.id) {
                window.location.href = '../index.html';
            } else {
                console.log(data);
            }
        })
        .catch(error => {
            console.error("Error:", error)
        })
})