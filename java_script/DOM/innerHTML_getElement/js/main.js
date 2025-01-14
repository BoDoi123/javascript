// 1. getElemenstByTagName("tagName")
console.log("getElementByTagName: ");
let li_item = document.getElementsByTagName("li");

console.log(li_item);
console.log(li_item.length);

// Truy xuat va thay doi 1 phan tu theo vi tri trong mang li_item
li_item[1].innerHTML = "Phan tu li index 1 da thay doi";

// 2. getElementsByClassName("className")
console.log("getElementsByClassName: ");
let li_class_item = document.getElementsByClassName("list");

console.log(li_class_item);
console.log(li_class_item.length);

// Truy xuat va thay doi 1 phan tu theo vi tri trong mang li_class_item
li_class_item[1].innerHTML = "Phan tu li index 1 da thay doi lan 2.";

// 3. getElementById("idName")
console.log("getElementById: ");
let el = document.getElementById("list_about");

console.log(el);

// Thay doi text cua bien el
el.innerHTML = "Something about me";
