import { loadHeaderFooter } from './utils.mjs';
import { addLoginModalFunctions } from './modal.mjs';
import Post from './Post';

loadHeaderFooter().then(() => {
    addLoginModalFunctions();
});

async function fetchPostData() {
  let postResponse = await fetch('https://icarpool-api.onrender.com/posts');
  let posts = await postResponse.json();

  let userResponse = await fetch('https://icarpool-api.onrender.com/users');
  let users = await userResponse.json();

  posts.forEach(post => {
    const postUser = users.find(user => user.id === post.userId);
    new Post(postUser.firstName, post.type, post.startDate, post.startTime, post.startLocation, post.endLocation);
  })
}

fetchPostData();

// const parallax = document.querySelector('main');

// window.addEventListener("scroll", function () {
//     let offset = window.scrollY;
//     parallax.style.backgroundPositionY = offset * .8 + "px";
// });

// Select the node that will be observed for mutations
const headerNode = document.querySelector("header");
const navNode = document.querySelector("nav");

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
    //   parallax.style.backgroundPositionY = 0;
      darkMode();
      observer.disconnect();
    } else if (mutation.type === "attributes") {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(headerNode, config);
observer.observe(navNode, config);

if (window.localStorage.getItem('darkmode') == 'TRUE') {
    let element = document.querySelector("body");

    element.classList.remove('light');
    element.classList.remove('dark');
    element.classList.add('dark');
}

async function darkMode() {
    let element = document.querySelector("body");

    const themeBtn = document.getElementById("theme-btn");
    if (window.localStorage.getItem('darkmode') == 'TRUE') {
        element.classList.remove('light');
        element.classList.add('dark');
        themeBtn.innerHTML = 'light_mode';
    }
    themeBtn.onclick = () => {
        if (themeBtn.innerHTML === 'dark_mode') {
            element.classList.remove('light');
            element.classList.add("dark");
            themeBtn.innerHTML = 'light_mode';
            window.localStorage.setItem('darkmode', 'TRUE');
        } else {
            element.classList.remove('dark');
            element.classList.add("light");
            themeBtn.innerHTML = 'dark_mode';
            window.localStorage.setItem('darkmode', 'FALSE');
        }
    }
}