/* 
Bai tap 13: Nhap vao diem trung binh, va xuat ra ket qua xep loai cua hoc sinh theo tieu chuan sau: 
    
    Gioi: Neu diem >= 8;

    Kha: Neu 8 > diem >= 6.5;

    Trung binh: Neu 6.5 > diem >= 5;

    Yeu: Neu diem < 5;
*/

let score = parseFloat(prompt("Nhap vao diem trung binh cua ban: "));

let rank = score >= 8 ? "Gioi" : score >= 6.5 ? "Kha" : score >= 5 ? "Trung binh" : "Yeu";

console.log(`Xep loai cua hoc sinh la: %s`, rank);
