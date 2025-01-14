// string.startsWith(searchValue, startIndex);
let s30 = "abcdef abcdef";

console.log(s30.startsWith("a"));
console.log(s30.startsWith("b"));

console.log(s30.startsWith("bc", 1));

// string.endsWith(searchValue, endIndex);
let s31 = "01234567890";

console.log(s31.endsWith("0"));

console.log(s31.endsWith("9", 10));
console.log(s31.endsWith("5"));

// VD: Kiểm tra xem tệp âm thanh có kết thúc .mp3?
let fileName = "nhac.mp3";

if (fileName.endsWith("mp3")) {
    console.log("Tệp tin là file âm thanh .mp3");
} else {
    console.log("Tệp tin không phải là file âm thanh .mp3");
}
