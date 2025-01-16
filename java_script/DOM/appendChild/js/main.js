// Xác định phần tử cha
let parentElm = document.querySelector("#header");

console.log(parentElm);

// Tạo 1 phần tử con, vd thẻ p
let p_elm = document.createElement("p");

p_elm.textContent = "Một con vịt xòe ra 2 cái cánh";

p_elm.style.color = "red";

p_elm.setAttribute("class", "doan_van");

// Them phan tu moi vao phan tu cha
// 1. Chỉ thêm được Node vào phần tử cha
parentElm.appendChild(p_elm); // appendChild khong them duoc van ban

// 2. Trả về phần tử được thêm
console.log(parentElm.appendChild(p_elm));

// 3. Chỉ thêm được 1 phần tử
let h3 = document.createElement("h3");
h3.textContent = "Đây là thẻ h3";

parentElm.appendChild(h3, p_elm, "Đây là văn bản mới thêm"); // Chỉ thêm đối tượng đầu tiên.

// Chỉ thêm từng phần tử 1
parentElm.appendChild(h3);
parentElm.appendChild(p_elm);

// VD: Thêm và lập tức thao tác với phần tử
// Tạo phần tử mới
let btn = document.createElement("button");
btn.textContent = "Click me";

// Thêm phần tử mới vào một phần tử cha và nhân giá trị trả về
let addedBtn = parentElm.appendChild(btn);

// Gán sự kiện click cho phần tử vừa được thêm
addedBtn.addEventListener("click", function () {
    alert("Bạn vừa click vào nút");
});
