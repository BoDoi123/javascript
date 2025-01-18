function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

// Chon phan tu button
const list_btn = document.querySelectorAll(".btn");

// Moi lan click thay doi mau nen va mau chu cua button
// for (let btn of list_btn) {
//     if (btn instanceof HTMLElement) {
//         btn.addEventListener("click", () => {
//             btn.style.backgroundColor = randomColor();
//             btn.style.color = randomColor();
//         });
//     }
// }

// Chon phan tu co class "title"
const titles = document.querySelectorAll(".title");

// Moi lan click thay doi mau nen va mau chu cua the h1
// for (let title of titles) {
//     if (title instanceof HTMLElement) {
//         title.addEventListener("click", () => {
//             title.style.backgroundColor = randomColor();
//             title.style.color = randomColor();
//         });
//     }
// }

// Dùng this keyword
function changeColor() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}

for (let btn of list_btn) {
    btn.addEventListener("click", changeColor);
}

for (let title of titles) {
    title.addEventListener("click", changeColor);
}
