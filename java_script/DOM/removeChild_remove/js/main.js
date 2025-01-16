// 1. removeChild()
// Cú pháp: parentElement.removeChild(childElement);
// Chon phan tu can xoa
let childElm = document.querySelector("#item2");

// Chon phan tu cha
let parentElm = document.querySelector("#list");

// Xoa phan tu
parentElm.removeChild(childElm);

// Cách 2: ngắn gọn hơn
// Lay phan tu can xoa
let childElm2 = document.querySelector("#item3");

childElm2.parentElement.removeChild(childElm2);

// 2. remove()
// Cú pháp: element.remove();
// Chon phan tu can xoa
let childElm3 = document.querySelector("#item4");

// Xoa phan tu
childElm3.remove();
