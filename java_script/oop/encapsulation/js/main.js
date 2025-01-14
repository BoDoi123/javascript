class Wallet {
    #pin; // Private field
    #balance; // Private field
    #isPinEnter = false; // Private field

    constructor(bankName, pin) {
        this.bankName = bankName;
        this.#pin = pin;
        this.#balance = 0; // Tai khoan bang 0 luc tao the
    }

    // Phuong thuc gui tien vao tai khoan
    deposit(value) {
        if (!this.#isPinEnter) {
            console.log("Kiem tra lai ma pin");
            return;
        }

        this.#balance += value;
    }

    // ===============================
    // Private method
    #validatePin(pin) {
        return this.#pin === pin;
    }

    // Public method
    enterPin(pin) {
        if (this.#validatePin(pin)) {
            this.#isPinEnter = true;
        } else {
            console.log("Invalid Pin");
        }
    }

    // ===============================

    // Phuong thuc rut tien
    withdraw(value) {
        if (!this.#isPinEnter) {
            console.log("Kiem tra lai ma pin");
            return;
        }

        if (this.#balance < value) {
            console.log("So tien trong tai khoan khong du");
        } else {
            this.#balance -= value;
            console.log("Rut tien thanh cong");
        }
    }

    get balance() {
        if (!this.#isPinEnter) {
            console.log("Kiem tra lai ma pin");
            return;
        }

        return this.#balance;
    }
}

// Tao doi tuong
const wallet = new Wallet("MB Bank", "1234");

// console.log(wallet.#balance);

// Nhap ma pin
wallet.enterPin("1234");

// Gui tien
wallet.deposit(1000);

// console.log(wallet.#balance);

// Rut tien
wallet.withdraw(250);

// Xem tai khoang, pin
// console.log(wallet.#balance);

// console.log(wallet.#pin);

console.log(wallet.balance);
