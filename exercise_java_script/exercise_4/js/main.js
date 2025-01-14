/* 
Bai tap 14: Khung tim kiem cho nguoi dung nhap vao lua chon:

    1. Tim theo ten

    2. Tim theo tac gia

    3. Tim theo nha san xuat

    4. Tim theo tieu de

    Thoat neu phim bam khong hop le
*/

let option = parseInt(
    prompt(
        `
    Chon cach tim kiem:
        1. Tim theo ten
        2. Tim theo tac gia
        3. Tim theo nha san xuat
        4. Tim theo tieu de
    `
    )
);

switch (option) {
    case 1:
        alert("Ban da chon tim theo ten.");
        break;
    case 2:
        alert("Ban da chon tim theo tac gia.");
        break;
    case 3:
        alert("Ban da chon tim theo nha san xuat.");
        break;
    case 4:
        alert("Ban da chon tim theo tieu de.");
        break;

    default:
        alert("Lua chon khong hop le.");
}
