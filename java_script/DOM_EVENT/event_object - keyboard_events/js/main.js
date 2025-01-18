const inp = document.querySelector("#inp");

inp.addEventListener("keydown", () => {
    console.log("KEYDOWN!");
});

inp.addEventListener("keyup", () => {
    console.log("KEYUP!");
});

// Event Object
// inp.addEventListener("keydown", (e) => {
//     console.log(e);
// });

inp.addEventListener("keydown", (e) => {
    console.log(e.key);
    console.log(e.code);
});

// Ví dụ: nếu người dùng bấm phím r thì thay đổi màu nền của trang web.
document.addEventListener("keydown", (e) => {
    if (e.key === "r") {
        // Doi mau nen the body
        document.body.style.backgroundColor = "cyan";
    }
});
