let number = 2;

switch (number % 2) {
    case 0:
        console.log("So chan");

        break;

    case 1:
        console.log("So le");

        break;

    default:
        console.log("Khong phai so.");
}

let month = parseInt(prompt("Nhap vao 1 thang (1-12): "));

switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Thang co 31 ngay");
        break;
    
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Thang co 30 ngay");
        break;
    
    case 2:
        console.log("Thang co 28 hoac 29 ngay");
        break;
    
    default:
        console.log("Thang khong ton tai");
}
