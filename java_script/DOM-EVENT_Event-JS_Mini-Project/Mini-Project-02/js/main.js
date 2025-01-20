// Cách 1:
const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
    const panels = document.querySelectorAll(".panel");

    for (let panel of panels) {
        if (panel.classList.contains("active")) {
            panel.classList.remove("active");
            break;
        }
    }

    const panel = e.target;

    if (panel.classList.contains("panel")) {
        panel.classList.add("active");
    }
});

// Cách 2:
// const panels = document.querySelectorAll(".panel");

// panels.forEach((item) => {
//     item.addEventListener("click", () => {
//         // Xóa class active của các panel khác.
//         removeActive();

//         // Thêm class active cho panel được click
//         item.classList.add("active");
//     });
// });

// function removeActive() {
//     panels.forEach((item) => {
//         item.classList.remove("active");
//     });
// }
