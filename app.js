const textBoxDiv = document.getElementById('text-box');
const typingArea = document.getElementById('typing-area');
const feedbackDiv = document.getElementById('feedback');



const text = "Peetrus tuli külla";
textBoxDiv.innerText = text;
let wordCount = 0
highlight()

let errorCount = 0
feedbackDiv.innerText = errorCount

typingArea.focus()
typingArea.addEventListener('keydown', event => {
    console.log(typingArea.value)
    if (event.keyCode == 32) {
        if(text.split(' ')[wordCount] != typingArea.value.split(' ')[wordCount] ) {
            errorCount++
            feedbackDiv.innerText = errorCount
        }
        wordCount++
        highlight()
    }
})

function highlight () {
    let wordsArray = text.split(' ')
    wordsArray[wordCount] = '<span class="highlight">' + wordsArray[wordCount] + '</span>'
    textBoxDiv.innerHTML = wordsArray.join(' ')
}
