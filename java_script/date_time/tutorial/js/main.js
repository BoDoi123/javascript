// Khởi tạo đối tượng Date
let currentDate = new Date();

console.log(typeof currentDate);

console.log(currentDate);

// Các hàm để lấy thông tin thời gian
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0.
let day = currentDate.getDay();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

console.log("Nam hien tai: " + year);
console.log("Thang hien tai: " + month);
console.log("Ngay hien tai: " + day);
console.log("Gio hien tai: " + hours);
console.log("Phut hien tai: " + minutes);
console.log("Giay hien tai: " + seconds);

// Xuất thời gian tại mốc 0
const timestamp1 = new Date(0);

console.log(timestamp1);

// Sử dụng getTime(); để lấy timestamp hiện tại
const currentTimestamp = currentDate.getTime();

// timestamp tính bằng mili giây
console.log("Timestamp hiện tai: ", currentTimestamp);
