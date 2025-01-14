// VD1: Xuat cac so tu 1 -> 4
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// VD2: Xuat cac so chan tu 0 -> 10
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// VD3: Tinh tong cac so chan tu 0 -> 10
let result = 0;

for (let i = 2; i <= 10; i += 2) {
    result += i;
}

console.log(`Tong cac so chan tu 0 -> 10 la: %s`, result);
