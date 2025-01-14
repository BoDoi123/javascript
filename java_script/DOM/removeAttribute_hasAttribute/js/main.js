// Lay selector co class la "list"
const item1 = document.querySelector(".list");

// 1. hasAttribute()
// Kiem tra xem phan tu co thuoc tinh class khong?
console.log(item1.hasAttribute("class"));

const item2 = document.querySelector("#heading_title");

console.log(item2.hasAttribute("style"));

// 2. removeAttribute()
// Loai bo 1 thuoc tinh khoi phan tu
item2.removeAttribute("style");

// Kiem tra lai xem thuoc tinh style da bi loai bo hay chua?
console.log(item2.hasAttribute("style"));

// Bai tap: Xoa toan bo thuoc tinh href trong cac the a nam trong ul
const listItems = document.querySelectorAll("ul a");

listItems.forEach((a) => {
    a.removeAttribute("href");
})
