class Wallet {
    constructor(bankName, pin) {
        this.bankName = bankName;
        this.pin = pin;
        this.balance = 0; // Tai khoan bang 0 luc tao the
    }

    // Phuong thuc gui tien vao tai khoan
    deposit(value) {
        this.balance += value;
    }

    // Phuong thuc rut tien
    withdraw(value) {
        if (this.balance < value) {
            console.log("So tien trong tai khoan khong du");
        } else {
            this.balance -= value;
            console.log("Rut tien thanh cong");
        }
    }
}

// Tao doi tuong
const wallet = new Wallet("MB Bank", "1234");

console.log(wallet.balance);

// Gui tien
wallet.deposit(1000);

console.log(wallet.balance);

// Rut tien
wallet.withdraw(250);

// Xem tai khoang, pin
console.log(wallet.balance.balance);

console.log(wallet.pin);
