const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");

const progressBar = document.querySelector("#progress");
const steps = document.querySelectorAll(".step");

let currentActive = 1;

function update(step) {
    if (step > 0) steps[currentActive - 1].classList.add("active");
    else steps[currentActive].classList.remove("active");

    // Bật hoặc tắt các nút "Previous" và "Next" dựa trên giá trị currentActive
    previousButton.disabled = currentActive === 1;
    nextButton.disabled = currentActive === steps.length;

    // Cập nhật chiều rộng của thanh tiến trình
    if (progressBar instanceof HTMLElement) {
        let process = ((currentActive - 1) / (steps.length - 1)) * 100;
        progressBar.style.width = process + "%";
    }
}

function changeStep(step) {
    currentActive += step; // Thay đổi giá trị currentActive

    update(step); // Cập nhật lại giao diện
}

function clickButton() {
    nextButton.addEventListener("click", () => {
        changeStep(1); // Tăng bước lên 1
    });

    previousButton.addEventListener("click", () => {
        changeStep(-1); // Giảm bước đi 1
    });
}

clickButton();
