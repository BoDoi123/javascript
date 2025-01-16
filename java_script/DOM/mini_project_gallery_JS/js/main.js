// Chọn phần tử cha
const container = document.getElementById("container");

const baseUrl =
    "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";

// Bài toán 1
// // Tạo phần tử con mới
// const newImg = document.createElement("img");
// newImg.src = `${baseUrl}1.png`;

// // Thêm phần tử con vào container
// container.appendChild(newImg);

// Bài toán 2: Thêm 151 ảnh vào container
// for (let i = 1; i <= 151; i++) {
//     // Tạo phần tử con mới
//     const newImg = document.createElement("img");

//     newImg.src = `${baseUrl}${i}.png`;

//     // Thêm phần tử con vào container
//     container.append(newImg);
// }

// Bài toán 3: Các thẻ img sẽ nằm trong thẻ div và có chứa thẻ span chứa số thứ tự
for (let i = 1; i <= 151; i++) {
    // Tạo 1 khối div để chứa phần tử img và số thứ tự
    const div = document.createElement("div");

    // Thêm div vào cuối container và lấy node mới tạo ra gán vào parentDiv
    const parentDiv = container.appendChild(div);

    // Tạo phần tử con img, thêm vào trong parentDiv
    const img = document.createElement("img");
    img.src = `${baseUrl}${i}.png`;

    // Tạo phần tử con span, thêm vào trong parentDiv
    const span = document.createElement("span");
    span.textContent = `#${i}`;

    // Thêm vào trong phần tử cha parentDiv
    parentDiv.append(img, span);
}
