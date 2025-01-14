// replace(oldValue, newValue)
let s14 = "hoc hoc nua hoc mai";

// Thay thế giá trị (oldValue) đầu tiên được tìm thấy trong chuỗi bằng giá trị mới (newValue)
console.log(s14.replace("hoc", "ngu"));

// Để thay thế tất cả, dùng biểu thức chính quy (regular expression)
console.log(s14.replace(/hoc/g, "ngu"));

/* 
    - /: Ký tự dấu gạch chéo (forward slash) bắt đầu biểu diễn chính quy
    
    - /: Ký tự dấu gạch chéo kết thúc phần chuỗi cần tìm kiếm

    - g: Cờ global. Khi sử dụng cờ này -> js sẽ tìm kiếm toàn bộ chuỗi.
*/

// repeat(count)
let s23 = "Hello, ";
let s24 = s23.repeat(3);

console.log(s24);
