// Bài tập JS 36: Cho file index, hãy code để khi người dùng click vào nút
// => Màu nền sẽ thay đổi ngẫu nhiên và hiển thị mã màu lên thẻ h1.
const btn = document.querySelector("#btn");

// btn.addEventListener("click", function () {
//     const red = Math.floor(Math.random() * 256); // 0 -255
//     const green = Math.floor(Math.random() * 256); // 0 - 255
//     const blue = Math.floor(Math.random() * 256); // 0 - 255
//     const colorCode = `rgb(${red}, ${green}, ${blue})`;

//     // Thay doi mau nen cua body
//     document.body.style.backgroundColor = `${colorCode}`;

//     // Thay doi the h1
//     const h1 = document.getElementById("title");
//     h1.textContent = `${colorCode}`;
// });

function changeColor() {
    const red = Math.floor(Math.random() * 256); // 0 -255
    const green = Math.floor(Math.random() * 256); // 0 - 255
    const blue = Math.floor(Math.random() * 256); // 0 - 255

    return `rgb(${red}, ${green}, ${blue})`;
}

btn.addEventListener("click", function () {
    const colorCode = changeColor();

    // Thay doi mau nen cua body
    document.body.style.backgroundColor = colorCode;

    // Thay doi the h1
    const h1 = document.getElementById("title");
    h1.textContent = colorCode;
});
