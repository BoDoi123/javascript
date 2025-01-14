let score = parseFloat(prompt("Nhap diem trung binh cua ban: "));

if (score <= 10 && score >= 8) {
    console.log("Hoc sinh gioi.");
} else if (score < 8 && score >= 6.5) {
    console.log("Hoc sinh kha.");
} else if (score < 6.5 && score >= 5) {
    console.log("Hoc sinh trung binh.");
} else if (score < 5 && score >= 0) {
    console.log("Hoc sinh yeu.");
} else {
    console.log("Ban nhap tao lao.");
}
