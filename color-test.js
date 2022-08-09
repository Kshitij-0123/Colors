const a = document.querySelectorAll("div");
const s = document.querySelector("section");
const color = {
    "bhc": [
        "linear-gradient(to top, #f46b45, #eea849)",
        "linear-gradient(to top, #4568dc, #b06ab3)",
        "linear-gradient(90deg, #52c234, #54c77a)",
        "linear-gradient(to top, #37314f, #928dab)",
        "linear-gradient(to top, #1a2980, #26d0ce)",
        "linear-gradient(to top, #cc2b5e, #753a88)",
        "linear-gradient(-225deg, #7de2fc 0%, #b9b6e5 100%)",
        "linear-gradient(-225deg, #5271c4 0%, #b19fff 48%, #eca1fe 100%)",
        "linear-gradient(-225deg, #ffe29f 0%, #ffa99f 48%, #ff719a 100%)",
        "linear-gradient(-60deg, #16a085 0%, #f4d03f 100%)",
        "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)",
        "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)",
        "linear-gradient(60deg, #29323c 0%, #485563 100%)",
        "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%),linear-gradient(to top, rgba(255, 255, 255, 0.40) 0%, rgba(0, 0, 0, 0.25) 200%)",
        "linear-gradient(to right, #bdc3c7 0%, #2c3e50 99%)",
        "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)"
    ],
    "ahc": [
        "linear-gradient(to right, #eea849, #f46b45",
        "linear-gradient(to right, #b06ab3, #4568dc)",
        "linear-gradient(360deg, #54c77a, #52c234)",
        "linear-gradient(to right, #928dab, #37314f)",
        "linear-gradient(to right, #26d0ce, #1a2980)",
        "linear-gradient(to right, #753a88, #cc2b5e)",
        "linear-gradient(225deg, #7de2fc 0%, #b9b6e5 100%)",
        "linear-gradient(225deg, #5271c4 0%, #b19fff 48%, #eca1fe 100%)",
        "linear-gradient(225deg, #ffe29f 0%, #ffa99f 48%, #ff719a 100%)",
        "linear-gradient(60deg, #16a085 0%, #f4d03f 100%)",
        "linear-gradient(60deg, #ff5858 0%, #f09819 100%)",
        "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)",
        "linear-gradient(-60deg, #29323c 0%, #485563 100%)",
        "linear-gradient(to top, #323232 0%, #3F3F3F 40%, #1C1C1C 150%),linear-gradient(to left, rgba(255, 255, 255, 0.40) 0%, rgba(0, 0, 0, 0.25) 200%)",
        "linear-gradient(to top, #bdc3c7 0%, #2c3e50 99%)",
        "linear-gradient(to top, #ffecd2 0%, #fcb69f 100%)"
    ]
}
//color the div
for (let i = 0; i < a.length; i++) {
    a[i].style.setProperty("--bhc", color["bhc"][i])
    a[i].style.setProperty("--ahc", color["ahc"][i])
    a[i].innerHTML = `<h1>${i+1}</h1>`;
}
//set carousel position
let p = 0
for (let i = 0; i < a.length; i++) {
    a[i].style.transform = `translateY(${p}vh)`
    p = p + 100
}
//make carousel functional
let pos = 0;
document.addEventListener('keydown', function (event) {
    if (event.key == 's' || event.key == '2' || event.key == 'ArrowDown') {
        pos = pos + 100;
        s.style.transform = `translateY(-${pos}vh)`
    }
    
    else if(event.key == 'w' || event.key == '8' || event.key == 'ArrowUp') {
        pos = pos - 100;
        s.style.transform = `translateY(-${pos}vh)`
    }
})