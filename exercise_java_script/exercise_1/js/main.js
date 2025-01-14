// Bài tập 4: Tính chu vi, diện tích hình tròn
let r = Number(prompt("Nhập bán kính của đường tròn: "));
let PI = Math.PI;

let perimeter = 2 * PI * r;
let area = PI * r * r;

console.log("Chu vi = " + perimeter);
console.log("Diện tích = " + area);

// Bài tập 5: Tính chu vi, diện tích hình chữ nhật
let a = Number(prompt("Nhập chiều dài cùa hình chữ nhật: "));
let b = Number(prompt("Nhập chiều rộng của hình chữ nhật: "));

perimeter = 2 * (a + b);
area = a * b;

console.log("Chu vi = " + perimeter);
console.log("Diện tích = " + area);

/* 
Bài tập 6: Viết chương trình nhập vào điểm 3 môn Toán, Văn, Anh của 1 học sinh. 
Tính điểm TB và xuất kết quả làm tròn 2 chữ số sau dấu phẩy.
*/
let math = Number(prompt("Nhập điểm Toán: "));
let literature = Number(prompt("Nhập điểm Văn: "));
let english = Number(prompt("Nhập điểm Anh: "));

let avg_score = (math + literature + english) / 3;

// Làm tròn 2 chữ số sau dấu phẩy
avg_score = avg_score.toFixed(2);

console.log("Điểm trung bình = " + avg_score);
