// Event Delegation
// 1. Ngăn submit mặc định của form
// 2. Khi nhấn submit thì thêm 1 li vào ul
const form = document.querySelector("#form");

const list_message = document.getElementById("list_item");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Ngăn submit mặc định của form

    const userName = document.querySelector("#username").value;
    const message = document.getElementById("message").value;

    // Tạo thẻ li
    const new_message = document.createElement("li");
    new_message.textContent = `${userName}: ${message}`;

    // Thêm li vào ul
    list_message.append(new_message);

    // Reset lại form
    form.reset();
});

// 3. Xóa phần tử li khi click vào, không dùng Event Delegation
// Chọn tất cả thẻ li
// const messages = document.querySelectorAll("li");

// // Duyệt qua ds messages
// for (let mess of messages) {
//     // Lắng nghe sự kiện click vào thẻ li
//     mess.addEventListener("click", () => {
//         // Xóa thẻ li
//         mess.remove();
//     });
// }

// Vấn đề: Khi thêm 1 thẻ li mới vào ul thì li đó không có sự kiện click
// => Xóa phần tử li khi click vào, dùng Event Delegation
list_message.addEventListener("click", (e) => {
    const message = e.target;
    // message.remove();
    // Kiểm tra xem thẻ được click có phải là thẻ li không
    if (message.tagName === "LI") {
        message.remove();
    }
});
