// Initial test
// alert("Hello, world!");

function makeBigger() {
    alert("Hello, world!");
    document.getElementById("fancyText").style.fontSize = "24pt";
}

function applyStyles() {
    let textArea = document.getElementById("fancyText");
    let fancy = document.getElementById("fancy");

    if (fancy.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooify() {
    let textArea = document.getElementById("fancyText");

    // Step 1: Uppercase everything
    let text = textArea.value.toUpperCase();

    // Step 2: Add "-Moo" to the last word of each sentence
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            words[words.length - 1] += "Moo";
        }
        sentences[i] = words.join(" ");
    }

    textArea.value = sentences.join(". ");
}
