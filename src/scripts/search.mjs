const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const date = document.getElementById("date").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    performSearch(date, from, to);
})

async function performSearch(date, from, to) {
    try {
        const postResponse = await fetch('https://icarpool-api.onrender.com/posts');
        const userResponse = await fetch('https://icarpool-api.onrender.com/users');

        if (!postResponse.ok || !userResponse.ok) {
            throw new Error("Failed to fetch post data");
        }
        const posts = await postResponse.json();
        const userData = await userResponse.json();

        const matchingPosts = posts.filter((post) => {
            return (
                (!date || post.startDate == date) &&
                (!from || post.startLocation.includes(from)) &&
                (!to || post.endLocation.includes(to))
            )
        })

        const queryParams = new URLSearchParams();

        matchingPosts.forEach((post, index) => {
            queryParams.append(`post${index}`, JSON.stringify(post));
        });

        window.location.href = `search/index.html?${queryParams.toString()}`;
    } catch (error) {
        console.error("Error:", error);
    }
}