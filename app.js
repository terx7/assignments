const textBoxDiv = document.getElementById('text-box');
const typingArea = document.getElementById('typing-area');
const feedbackDiv = document.getElementById('feedback');
const timerBoxDiv = document.getElementById('timer');



const text = "Peetrus tuli külla";
let wordsArray = text.split(' ')
textBoxDiv.innerText = text;
let wordCount = 0
highlight()

let errorCount = 0
feedbackDiv.innerText = errorCount

// Timer
let timer = 0
timerBoxDiv.innerText = '0:00'

setInterval(() => {
    timer++
    minutes = parseInt(timer / 60)
    seconds = (timer % 60).toString().padStart(2, '0')
    timerBoxDiv.innerText = minutes + ':' + seconds
}, 1000);

// Keydown event
typingArea.focus()
typingArea.addEventListener('keydown', event => {
    console.log(typingArea.value)

    if (event.keyCode == 32) {
        if(text.split(' ')[wordCount] != typingArea.value.split(' ')[wordCount] ) {
            wordsArray[wordCount] = '<span class="incorrect">' + wordsArray[wordCount] + '</span>'
            errorCount++
            feedbackDiv.innerText = errorCount
        } else {
            wordsArray[wordCount] = '<span class="correct">' + wordsArray[wordCount] + '</span>'
        }

        wordCount++
        highlight()
    }
})

function highlight () {
    let highlightedArray = Array.from(wordsArray)
    highlightedArray[wordCount] = '<span class="highlight">' + highlightedArray[wordCount] + '</span>'
    textBoxDiv.innerHTML = highlightedArray.join(' ')
}
