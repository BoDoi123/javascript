// 1. getAttribute()
const firstLink = document.querySelector("a");

// Kiem tra xem co the a duoc tim thay hay khong
if (firstLink) {
    const linkHref = firstLink.getAttribute("href");

    console.log(linkHref);
} else {
    console.log("Khong tim thay the a");
}

// 2. setAttribute()
firstLink.setAttribute("target", "_blank");

// Su dung querySelectorAll de chon tat ca cac the a trong ul
const links = document.querySelectorAll("ul a");

// Lap qua moi the a va su dung setAttribute de them thuoc tinh target="_blank"
links.forEach((singleLink) => {
    singleLink.setAttribute("target", "_blank");
});

// Bai tap
const firstH1 = document.querySelector("#heading_title");

firstH1.setAttribute("style", "color: blue");
