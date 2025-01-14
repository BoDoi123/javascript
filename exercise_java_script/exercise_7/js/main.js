/* 
Bai tap 24: Nhap vao 1 chuoi tu ban phim.

    1. dem xem co bao nhieu ky tu thuong

    2. bao nhieu in hoa

    3. bao nhieu so

    4. bao nhieu space
*/

function countChar() {
    let str = prompt("Nhap vao 1 chuoi: ");

    let lowerCase = /[a-z]/;
    let upperCase = /[A-Z]/;
    let numberCase = /[0-9]/;
    let space = /\s/;

    let upperChar = 0;
    let lowerChar = 0;
    let numberChar = 0;
    let spaceChar = 0;

    for (c of str) {
        if (lowerCase.test(c)) {
            lowerChar++;
        } else if (upperCase.test(c)) {
            upperChar++;
        } else if (numberCase.test(c)) {
            numberChar++;
        } else if (space.test(c)) {
            spaceChar++;
        }
    }

    console.log(`case test: ${str}
So ky tu thuong: ${lowerChar}
So ky tu in hoa: ${upperChar}
So chu so: ${numberChar}
So khoang trang: ${spaceChar}
        `);
}

/* 
Bai tap 25: 

    a) Kiem tra tinh hop le cua mat khau

        1. mat khau hop le khi co it nhat 6 ky tu.

        2. chua it nhat 1 chu cai viet hoa

        3. chua it nhat 1 chu cai viet thuong

        4. chua it nhat 1 chu so

    b) Cho nguoi dung nhap vao mat khau de login.
    
        => So sanh, neu dung mo cua, sai qua 5 lan khoa dang nhap, thoat chuong trinh.
*/
function checkPassword(password = "") {
    if (password === "") {
        alert("Vui long khong de trong password!!");
        return false;
    }

    let check = [false, false, false, false];

    let message =
        "Mat khau khong hop le:\n\t1. Password can it nhat 6 ky tu.\n\t2. Password can it nhat 1 chu cai in hoa.\n\t3. Password can it nhat 1 chu cai in thuong.\n\t4. Password can it nhat 1 chu so.\n";

    let upperCase = /[A-Z]/;
    let lowerCase = /[a-z]/;
    let numberCase = /\d/;

    if (password.length >= 6) {
        check[0] = true;
    }

    for (c of password) {
        if (upperCase.test(c)) {
            check[1] = true;
        } else if (lowerCase.test(c)) {
            check[2] = true;
        } else if (numberCase.test(c)) {
            check[3] = true;
        }
    }

    for (i of check) {
        if (!i) {
            alert(message);
            return false;
        }
    }

    return true;
}

function register() {
    let password;

    while (true) {
        password = prompt("Dang ky tai khoan.\nMoi thiet lap password: ");

        if (checkPassword(password)) {
            alert("Khoi tao tai khoan thanh cong.\nMat khau cua ban la: " + password);
            break;
        }
    }

    return password;
}

function login(password) {
    let count = 1;

    while (true) {
        if (count > 5) {
            alert("Ban da thu 5 lan.\nTai khoan da bi khoa.\nLien he admin.");
            return;
        }

        let inputPass = prompt("Dang nhap tai khoan.\nVui long nhap vao mat khau cua ban: ");

        if (inputPass === password) {
            alert("Dang nhap thanh cong.");
            return;
        } else {
            alert("Ban nhap sai mat khau.\nSo lan thu la: " + count + "/5");
            count++;
        }
    }
}

/* 
Bai tap 26:

    - Chuyen tin nhan sang mat khau ma theo bang:

        const a = "abcdefghijklmnopqrstuvwxyz";
        const b = "zxcvbnmasdfghjklqwertyuiop";
*/
function inputMessage() {
    return prompt("Nhap tin nhan can ma hoa: ");
}

function encodeMessage(message) {
    const a = "abcdefghijklmnopqrstuvwxyz";
    const b = "zxcvbnmasdfghjklqwertyuiop";

    let result = "";

    for (c of message) {
        result += b[a.indexOf(c)];
    }

    alert("Tin nhan da duoc ma hoa: " + result);
}

/* 
Bai tap 27:

    - const a = "toi cham hoc toi chiu kho toi dep zai";

        => Dem tu toi trong string a tren.
*/
function countSubString() {
    const a = "toi cham hoc toi chiu kho toi dep zai";

    let str = "toi";
    let count = 0;

    for (s of a.trim().split(" ")) {
        if (s === str) {
            count++;
        }
    }

    alert(`So lan xuat hien cua tu "${str}" trong chuoi la: ${count}`);
}

/* 
Bai tap 28:

    - Tach so va chu tu chuoi nhap vao thanh 2 chuoi.
*/
function inputStr() {
    return prompt("Nhap chuoi: ");
}

function splitString(str) {
    let letter = /[A-Za-z]/;
    let number = /\d/;

    let letter_str = "";
    let number_str = "";

    for (c of str) {
        if (letter.test(c)) {
            letter_str += c;
        } else if (number.test(c)) {
            number_str += c;
        }
    }

    alert("Chuoi ban dau: " + str + "\nChuoi chu: " + letter_str + "\nChuoi so: " + number_str);
}

// Test Methods
function main() {
    // Bai 24:
    countChar();

    // Bai 25:
    let password = register();

    login(password);

    // Bai 26:
    let message = inputMessage();

    encodeMessage(message);

    // Bai 27:
    countSubString();

    // Bai 28:
    let str = inputStr();

    splitString(str);
}

main();
