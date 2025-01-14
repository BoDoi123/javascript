// 4. Set ngày tháng năm
// Cách 1:
let myDate1 = new Date(2024, 1, 14);

console.log(myDate1);

console.log(myDate1.toLocaleDateString());

// Cách 2:
let myDate2 = new Date("2024-02-15T12:30:45");

console.log(myDate2);

console.log(myDate2.toLocaleDateString());

// Cách 3:
let myDate3 = new Date();

myDate3.setFullYear(2024);
myDate3.setMonth(1);
myDate3.setDate(16);

console.log(myDate3);

// 5. Xuất ngày tháng năm
// Cách 1:
myDate3.setFullYear(2024);
myDate3.setMonth(1);
myDate3.setDate(16);

console.log(myDate3.toLocaleDateString());

// Cách 2:
// Xuất ngày tháng năm theo định dạng mong muốn (tự code):
console.log(`Ngày ${myDate3.getDate()}/Tháng ${myDate3.getMonth() + 1}/Năm ${myDate3.getFullYear()}`);

// Thêm số 0 đề xuất ngày tháng dạng 01, 02, ...
let prefixDate = myDate3.getDate() < 10 ? "0" : "";
let prefixMonth = myDate3.getMonth() + 1 < 10 ? "0" : "";

console.log(
    `Ngày ${prefixDate}${myDate3.getDate()}/Tháng ${prefixMonth}${myDate3.getMonth() + 1}/Năm ${myDate3.getFullYear()}`
);
