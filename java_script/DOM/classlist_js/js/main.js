// Lay phan tu can tuong tac
let element = document.getElementById("myElement");

// 1. classList.add(): Them 1 Class vao phan tu
element.classList.add("newClass");

// 2. classList.contains(): Kiem tra xem phan tu co chua Class cu the khong
console.log(element.classList.contains("newClass"));

// 3. classList.remove(): Xoa 1 Class khoi phan tu
element.classList.remove("newClass");

console.log(element.classList.contains("newClass"));

// 4. classList.replace(): Thay the 1 Class cu bang 1 Class moi
element.classList.replace("newClass", "abc");

// 5. classList.toggle(): Loai bo 1 Class neu ton tai va them neu Class chua co
element.classList.toggle("toggleClass");

// element.classList.toggle("toggleClass");

// element.classList.toggle("toggleClass");

// element.classList.toggle("toggleClass");

// 6. Xem cac Class trong phan tu
console.log(element.classList);
