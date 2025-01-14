// 6. querySelector
// Chon phan tu co id la "heading_title" va thay doi noi dung cua no
let title = document.querySelector("#heading_title");

console.log(title);

title.innerHTML = "New Title";

// Chon phan tu dau tien co lop la "list" thay doi noi dung
let firstListItem = document.querySelector(".list");

firstListItem.innerHTML = "Trang chu";

// Quan trong: querySelector có thể chọn CSS kết hợp
let firstLinkInList = document.querySelector("ul a");

console.log(firstLinkInList); // Có thể trả về null. Do ta đã thay đổi inner của li ở trên => biến mất thẻ a.

// Chọn phần tử input checkbox và đặt thuộc tính checked cho nó.
let checkbox = document.querySelector("input");

checkbox.checked = true;

// 7. querySelectorAll()
let list_item = document.querySelectorAll("li");

console.log(list_item);

list_item[1].innerHTML = "Lien he voi chung toi";
