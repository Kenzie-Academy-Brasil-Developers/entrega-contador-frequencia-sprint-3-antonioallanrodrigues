const button = document.getElementById("countButton");

button.addEventListener('click', function() {
    const letterCounts = {};
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }

    }
    for (let letter in letterCounts) {
        const span = document.createElement("span");
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent;
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span);
    }

    const palavraCounts = {};
    typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    words = typedText.split(/\s/);
    for (let i = 0; i < words.length; i++) {
        currentLetter = words[i];
        if (palavraCounts[currentLetter] === undefined) {
            palavraCounts[currentLetter] = 1;
        } else {
            palavraCounts[currentLetter]++;
        }

    }
    for (let letter in palavraCounts) {
        const span = document.createElement("span");
        const textContent = `"${letter}": ${palavraCounts[letter]}, `;
        span.innerText = textContent;
        const letters = document.getElementById("wordsDiv");
        letters.appendChild(span);
    }



});