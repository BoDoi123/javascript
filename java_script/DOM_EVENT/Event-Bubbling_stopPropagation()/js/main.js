// 11. event bubbling
const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const grandparent = document.querySelector("#grandparent");

// child.addEventListener("click", () => {
//     console.log("Child was clicked");
// });

// parent.addEventListener("click", () => {
//     console.log("Child was clicked");
// });

// grandparent.addEventListener("click", () => {
//     console.log("Child was clicked");
// });

child.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Child was clicked");
});

parent.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Child was clicked");
});

grandparent.addEventListener("click", () => {
    console.log("Child was clicked");
});
