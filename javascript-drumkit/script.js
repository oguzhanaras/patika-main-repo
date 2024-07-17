let a = document.getElementById("a");
let s = document.getElementById("s");
let d = document.getElementById("d");
let f = document.getElementById("f");
let g = document.getElementById("g");
let h = document.getElementById("h");
let j = document.getElementById("j");
let k = document.getElementById("k");
let l = document.getElementById("l");


document.body.addEventListener("keydown", (event) => {
    let key = event.key.toLocaleLowerCase();
    let sound = document.getElementById(key + "-audio");
    sound.play();
    document.getElementById(key).style.backgroundColor = "yellow";
    document.getElementById(key).style.boxShadow = "red 2px 2px";
});

document.body.addEventListener("keyup", (event) => {
    let key = event.key.toLocaleLowerCase();
    document.getElementById(key).style.backgroundColor = "white";
    document.getElementById(key).style.boxShadow = "none";
});

document.body.addEventListener("mousedown", (event) => {
    let key = event.target.id;
    let sound = document.getElementById(key + "-audio");
    sound.play();
    document.getElementById(key).style.backgroundColor = "yellow";
    document.getElementById(key).style.boxShadow = "red 2px 2px";
});

document.body.addEventListener("mouseup", (event) => {
    let key = event.target.id;
    console.log(key);
    document.getElementById(key).style.backgroundColor = "white";
    document.getElementById(key).style.boxShadow = "none";
});


// a.addEventListener("click", () => {
//     let sound = document.getElementById("a-audio");
//     sound.play();
// });

// s.addEventListener("click", () => {
//     let sound = document.getElementById("s-audio");
//     sound.play();
// });

// d.addEventListener("click", () => {
//     let sound = document.getElementById("d-audio");
//     sound.play();
// });

// f.addEventListener("click", () => {
//     let sound = document.getElementById("f-audio");
//     sound.play();
// });

// g.addEventListener("click", () => {
//     let sound = document.getElementById("g-audio");
//     sound.play();
// });

// h.addEventListener("click", () => {
//     let sound = document.getElementById("h-audio");
//     sound.play();
// });

// j.addEventListener("click", () => {
//     let sound = document.getElementById("j-audio");
//     sound.play();
// });

// k.addEventListener("click", () => {
//     let sound = document.getElementById("k-audio");
//     sound.play();
// });

// l.addEventListener("click", () => {
//     let sound = document.getElementById("l-audio");
//     sound.play();
// });