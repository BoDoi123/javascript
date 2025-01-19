// change event: sự kiện xảy ra khi đồng thời xuất hiện giá trị thay đổi và mất focus
const input = document.getElementById("name");

// input.addEventListener("change", function (e) {
//     console.log(e.target.value);
// });

// input event: sự kiện xảy ra khi người dùng nhập liệu trên 1 phần tử HTML
input.addEventListener("input", function (e) {
    console.log(e.target.value);

    // đứa giá trị của input vào thẻ h2 có id là "hi"
    const hi = document.querySelector("#hi");

    hi.textContent = e.target.value;
});
