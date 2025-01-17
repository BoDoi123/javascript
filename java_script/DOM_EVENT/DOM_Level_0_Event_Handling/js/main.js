// 1.1. Xác định phần tử id có btn
const button1 = document.querySelector("#btn");

// 1.2. Gán sự kiện click cho btn, sử dụng function expression
button1.onclick = function () {
    alert("Bạn đã click vào button");
};

// 1.3 dùng function declaration khai báo hàm, sau đó gán hàm đó cho sự kiện click
function clickHandler() {
    alert("Bạn đã click vào button");
}

button1.onclick = clickHandler;

// 1.4. hoặc dùng arrow function
button1.onclick = () => {
    alert("Bạn đã click vào button");
};

// 1.5 Ví dụ 2:
function mouseOver() {
    document.getElementById("message").textContent = "Mouse is over the button";
}

function mouseOut() {
    document.getElementById("message").textContent = "Mouse left the button";
}

function setUp() {
    var button = document.getElementById("btn2");
    button.onmouseover = mouseOver;
    button.onmouseout = mouseOut;
}

// Sự kiện onload của đối tượng window được kích hoạt khi toàn bộ trang web đã tải xong, bao gồm tất cả các tài nguyên như hình ảnh, script và stylesheet.
window.onload = setUp;
