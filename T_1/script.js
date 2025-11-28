
function bodyLoadHandler() {
    var output = document.getElementById("task1-output");
    if(output) output.value = "Сторінка успішно завантажена (подія onload).";
}

function bodyResizeHandler() {
    var output = document.getElementById("task1-output");
    var w = window.innerWidth;
    var h = window.innerHeight;
    if(output) output.value = "Зміна розміру вікна: Ширина=" + w + ", Висота=" + h;
}

function headerClickHandler(el) {
    el.innerText = "Клік зафіксовано! (onclick)";
    el.style.backgroundColor = "#ffeb3b"; 
}

function headerMouseOverHandler(el) {
    el.style.color = "red";
    el.style.textDecoration = "underline";
}

function headerMouseOutHandler(el) {
    el.style.color = "#0056b3";
    el.style.textDecoration = "none";
    el.style.backgroundColor = "white";
    el.innerText = "Лабораторна робота №7";
}

function showImagesInfo() {
    var images = document.images;
    var result = "Знайдено зображень: " + images.length + "\n";
    
    for(var i=0; i<images.length; i++) {
        result += (i+1) + ". " + (images[i].name || "без імені") + 
                  " | Alt: " + images[i].alt + "\n";
    }
    document.getElementById("info-output").value = result;
}

function imgMouseOver(img) {
    img.style.transform = "scale(1.2)"; 
    img.style.border = "3px solid red"; 
    img.style.cursor = "pointer";
}

function imgMouseOut(img) {
    img.style.transform = "scale(1)";   
    img.style.border = "none";
}

function processRegexTask() {
    var text = document.getElementById("regex-input").value;
    var resultSpan = document.getElementById("regex-result");
    var regex = /\bk[a-z]*o\b/gi;
    
    var matches = text.match(regex);
    
    if (matches) {
        resultSpan.innerText = "Found: " + matches.join(", ");
        resultSpan.style.color = "green";
    } else {
        resultSpan.innerText = "No matches found.";
        resultSpan.style.color = "red";
    }
}

function processArrayTask() {
    var input = document.getElementById("array-input").value;
    var output = document.getElementById("array-output");
    
    var arrA = input.split(',').map(item => parseFloat(item.trim()));
    
    var arrB = arrA.filter(num => !isNaN(num) && num < 0);
    
    output.value = "Масив B (тільки від'ємні): [" + arrB.join(", ") + "]";
    console.log("Вхідний:", arrA, "Вихідний:", arrB);
}