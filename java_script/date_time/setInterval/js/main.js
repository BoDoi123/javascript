// Function Declaration
// VD1:
function showNotification() {
    console.log("Ban co xxx tin nhan chua doc");
}

setInterval(showNotification, 2000);

// VD2:
function updateTime() {
    let currentTime = new Date();

    console.log(currentTime);
}

setInterval(updateTime, 1000);

let counter = 0;

function count() {
    console.log(counter++);
}

// Function Expression
let count1 = function () {
    console.log(counter++);
};

// Arrow Function
let count2 = () => {
    console.log(counter++);
};

setInterval(count, 1000);

// 2. Hủy lặp
let counter3 = 0;

let count3 = () => {
    console.log(counter3++);

    // Step 2: Dừng lặp dùng clearInterval()
    if (counter3 === 5) {
        clearInterval(stopInterval);
    }
};

// Step 1: Gán biến để nhận giá trị trả về
let stopInterval = setInterval(count3, 1000);
