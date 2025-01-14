let i = 1;

while (i <= 5) {
    console.log(i);

    i++;
}

/* 
Vi du thuc hanh: 

Nhap so n vao tu ban phim. n phai la so nguyen nam trong khoang tu 1 -> 99. 
Nhap sai bat nhap lai.
*/
let n = prompt("Nhap vao 1 so nguyen trong doan [1-99]: ");

console.log(n);

// Dung n % 1 !== 0 de kiem tra xem n co phai la 1 so nguyen khong
while (isNaN(n) || n < 1 || n > 99 || n % 1 !== 0) {
    n = Number(prompt("So ban nhap khong hop le. Vui long nhap lai (tu 1 den 99): "));
}

alert("Ban da nhap so nguyen: " + n);
