const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        // Lấy tọa độ của button so với vp
        let top = e.offsetY;
        let left = e.offsetX;

        const new_circle = document.createElement("span");
        new_circle.classList.add("circle");

        new_circle.style.top = top + "px";
        new_circle.style.left = left + "px";

        button.appendChild(new_circle);

        setTimeout(() => {
            new_circle.remove();
        }, 500);
    });
});
