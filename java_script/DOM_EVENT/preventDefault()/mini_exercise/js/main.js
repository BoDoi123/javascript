const form = document.querySelector("#login");

const userName = document.querySelector("#name");

// Chọn thẻ ul cha
const list = document.getElementById("list");

const password = document.querySelector("#password");

// Để trích xuất dữ liệu từ input, chúng ta sẽ sử dụng value property.
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(userName.value);

    // Tạo thẻ li mới
    const user_element = document.createElement("li");
    user_element.textContent = userName.value;

    // Thêm thẻ li mới vào thẻ ul cha
    list.append(user_element);

    // Reset input userName về trống
    userName.value = "";
    password.value = "";
});

// Ngăn không cho thẻ a chuyển hướng
const link = document.querySelector("a");

link.addEventListener("click", function (e) {
    e.preventDefault();

    console.log("Link was clicked");
});
