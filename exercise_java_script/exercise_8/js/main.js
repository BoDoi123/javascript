/* 
Bai tap 29: Nhap vao nam sinh va in ra so tuoi

    - Kiem tra dieu kien du lieu nhap vao co phai la so nguyen, phai > 0
*/
function isYear(birthYear) {
    if (birthYear < 0 || !Number.isInteger(birthYear)) {
        return false;
    }

    return true;
}

function inputBirthYear() {
    let birthYear = Number(prompt("Nhap nam sinh cua ban: "));

    while (!isYear(birthYear)) {
        alert("Nam sinh khong hop le. Nam sinh la so nguyen lon hon 0");

        birthYear = Number(prompt("Nhap nam sinh cua ban: "));
    }

    return birthYear;
}

function getAge(birthYear) {
    let currentDate = new Date();

    let currentYear = currentDate.getFullYear();

    alert(`Tuoi cua ban la: ${currentYear - birthYear} tuoi`);
}

/*
Bai tap 30: Dem nguoc thoi gian theo tung giay (countdown)

    VD: thoi gian lam bai la 45 phut neu chay ve 0 thi thong bao het gio
*/
function inputMinutes() {
    let minutes = Number(prompt("Moi nhap thoi gian lam bai: "));

    while (minutes < 0 || !Number.isInteger(minutes)) {
        alert("Thoi gian khong hop le. Vui long nhap so nguyen duong.");

        minutes = Number(prompt("Moi nhap thoi gian lam bai: "));
    }

    alert(`Thoi gian lam bai cua ban la: ${minutes} phut`);

    return minutes;
}

function declareTime(minutes, seconds) {
    prefixMinute = minutes < 10 ? "0" : "";
    prefixSecond = seconds < 10 ? "0" : "";

    console.log(`${prefixMinute}${minutes}:${prefixSecond}${seconds}`);
}

function countDown(minutes) {
    let seconds = 60 * minutes;

    let countDownInterval = setInterval(function () {
        let minutesLeft = Math.floor(seconds / 60);
        let secondLeft = seconds % 60;

        declareTime(minutesLeft, secondLeft);

        if (seconds <= 0) {
            clearInterval(countDownInterval);

            alert("Ban da het thoi gian lam bai thi.");
        }

        seconds--;
    }, 1000);
}

/* 
Bai tap 31: vt chuong trinh co ten timeSet, thong bao nguoi dung offline x phut...

    VD: ban dang chat voi ban A, sau do ban A offline

        => Yeu cau: update hien thi thoi gian ban A offline 'x giay truoc', 'x ngay truoc', 'x thang truoc', 'x nam truoc'
*/
// Vi du su dung
function timeSince() {
    const timestamp = 1707206532854;
    const now = new Date();

    const differenceTimestamp = now - timestamp;

    const seconds = Math.floor(differenceTimestamp / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    let str = "Online ";

    if (seconds <= 60) {
        return str + seconds + " giay truoc";
    } else if (minutes <= 60) {
        return str + minutes + " phut truoc";
    } else if (hours <= 60) {
        return str + hours + " gio truoc";
    } else if (days <= 30) {
        return str + days + " ngay truoc";
    } else if (months <= 12) {
        return str + months + " thang truoc";
    } else {
        return str + years + " nam truoc";
    }
}

function main() {
    let birthYear = inputBirthYear();

    getAge(birthYear);

    let minutes = inputMinutes();
    countDown(minutes);

    let timeOffline = timeSince();
}

main();
