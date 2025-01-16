let parentElement = document.querySelector("#container");

for (let i = 1; i <= 100; i++) {
    let btn = document.createElement("button");
    btn.textContent = `Button ${i}`;

    parentElement.append(btn);

    // neu i le thi nut co mau nen la magenta
    if (i % 2 !== 0) {
        btn.style.backgroundColor = "magenta";
    }
}
