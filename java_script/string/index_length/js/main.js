console.log("xin chao, ABC, 123, !@#$");
console.log(`xin chao, ABC, 123, !@#$`);

// Khoi tao chuoi
let s1 = `Hoi do toi che mom em rong
Khong tin hai dua chap mom do.
`;

console.log(s1);

let s2 = "Hoi do toi che mom em rong.\nKhong tin hai dua chap mom do.";

console.log(s2);

console.log(typeof s1);
console.log(typeof s2);

// index chuỗi.
let name = "Linh";

console.log(name[1]);

// Thuộc tính length
// VD vận dụng: Nhập vào 1 tin nhắn, giới hạn ký tự nhập tối đa 140, nếu quá báo số ký tự vượt quá.
let message = prompt("Nhập vào tin nhắn: ");

if (message <= 140) {
    alert(`Ban da nhap ${message.length} ky tu, so ky tu con lai: ${140 - message.length}.`);
} else {
    alert(`Ban da nhap qua ${message.length - 140} ky tu.`);
}
