// slice
let s4 = "0123456789";

let s5 = s4.slice(1, 4); // cắt từ 1 -> 3

console.log(`Chuoi sau cat: ${s5}.`);

// VD vận dụng: Chỉ cho phép tin nhắn dài tối đa 20 ký tự, nếu quá thì tự cắt phần thừa, và xuất chuỗi sau xử lý.
let message = prompt("Moi nhap vao tin nhan: ");

if (message > 20) {
    message = message.slice(0, 20);
}

alert(message);

// Code one line (VD trên)
console.log("Chuoi sau xu ly: " + prompt("Nhap vao tin nhan").slice(0, 20));

// substring
let s6 = "0123456789";

let s7 = s6.substring(1, 4); // cắt từ 1 -> 3

console.log(`Chuoi sau cat: ${s7}`);

// So sánh substring() & slice()
let s8 = "0123456789";

console.log("Su dung substring()");

console.log(s8.substring(1, 4)); // "123"
console.log(s8.substring(4, 1)); // Tu dong hieu so nho hon la start va so lon la end => "123"

console.log("Su dung slice()");

console.log(s8.slice(1, 4)); // "123"
console.log(s8.slice(4, 1)); // Tu dong hieu la chuoi rong => ""

// Xử lý số âm
let s10 = "0123456789";

console.log("Su dung substring voi doi so am.");

console.log(s10.substring(-3, -1)); // ""
// Chuyen so am thanh 0

console.log("Truong hop substring co 1 doi so am va end < start");

console.log(s10.substring(4, -5)); // 0123
// s10.substring(4, -5) -> s10.substring(4, 0) -> s10.substring(0, 4)

console.log("Su dung slice voi doi so am");

console.log(s10.slice(-3, -1)); // "78"
// lay tu index -3 den sat -1 (tuc la index -2) (Lay dao nguoc tu cuoi chuoi len)
