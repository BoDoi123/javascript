// Chon den phan tu co id la "demo"
let element = document.querySelector("#demo");

// 1. textContent
console.log("textContent: ");
console.log(element.textContent);

// 2. innerText
console.log("innerText: ");
console.log(element.innerText);

// 3. innerHTML
console.log("innerHTML: ");
console.log(element.innerHTML);

// Chon den phan tu co id la "demo2"
let element2 = document.getElementById("demo2");

element2.innerHTML = "<p><i>Tuhoc.cc</i></p>";
element2.textContent = "<p><i>Tuhoc.cc</i></p>";
