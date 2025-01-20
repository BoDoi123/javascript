// 11. event bubbling
const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const grandparent = document.querySelector("#grandparent");

// child.addEventListener(
//     "click",
//     () => {
//         console.log("Child was clicked");
//     },
//     true
// );

// parent.addEventListener(
//     "click",
//     () => {
//         console.log("Child was clicked");
//     },
//     true
// );

// grandparent.addEventListener(
//     "click",
//     () => {
//         console.log("Child was clicked");
//     },
//     true
// );

// So sánh 2 phương thức topPropagation() và stopImmediatePropagation()
// 1. Dùng stopPropagation(): Chỉ ngăn chặn sự lan truyền từ con sang cha, tuy nhiên không ngăn chặn của cùng 1 phần tử
// child.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Child was clicked");
// });

// child.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Child was clicked 2");
// });

// parent.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Child was clicked");
// });

// grandparent.addEventListener("click", () => {
//     console.log("Child was clicked");
// });

// 2. Dùng stopImmediatePropagation(): Có thể ngăn chặn sự kiền của cùng 1 element
child.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    console.log("Child was clicked");
});

child.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Child was clicked 2");
});

parent.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Child was clicked");
});

grandparent.addEventListener("click", () => {
    console.log("Child was clicked");
});
