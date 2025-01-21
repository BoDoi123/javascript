const search_block = document.querySelector(".search");

const search_btn = document.querySelector(".btn");

const input = document.querySelector(".input");

search_btn.addEventListener("click", () => {
    search_block.classList.toggle("active");

    input.focus();
});
