// DOM style
let heading = document.querySelector("h1");

heading.style.backgroundColor = "cyan";
heading.style.fontSize = "46px";
heading.style.color = "red";

// Cách viết gọn
Object.assign(heading.style, {
    backgroundColor: "cyan",
    fontSize: "46px",
    color: "red",
});
