// elements
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let result = document.getElementById("result");
let bmiInputs = document.getElementById("bmi-inputs");



function checkInputs() {
    var heightValue = height.value.trim();
    var weightValue = weight.value.trim();
    
    // Her iki input da doluysa calculator fonksiyonunu çağır
    if (heightValue !== "" && weightValue !== "") {
        calculator(heightValue / 100, weightValue);
    }
}

function calculator(h, w) {
    let bmi = w / (h * h);
    console.log(bmi);
    result.value = bmi;
}



// input value change check
height.addEventListener('input', checkInputs);
weight.addEventListener('input', checkInputs);