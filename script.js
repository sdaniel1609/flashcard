function toggleFlip(flashCardId) {
    var flashCard  = document.getElementById(flashCardId);
    flashCard.classList.toggle('flip');
}

function toggleRevealBtn(flashCardId) {
    var flashCard  = document.getElementById(flashCardId);
    flashCard.querySelector('.reveal-btn').classList.toggle('hide');
}

function toggleResetBtn(flashCardId) {
    var flashCard  = document.getElementById(flashCardId);
    flashCard.querySelector('.reset-btn').classList.toggle('hide');
}

function toggleRightIcon(flashCardId) {
    var flashCard  = document.getElementById(flashCardId);
    flashCard.querySelector('.right-icon').classList.toggle('hide');
}

function toggleWrongIcon(flashCardId) {
    var flashCard  = document.getElementById(flashCardId);
    flashCard.querySelector('.wrong-icon').classList.toggle('hide');
}

function hideIcons(flashCardId) {
    var flashCard  = document.getElementById(flashCardId);
    flashCard.querySelector('.right-icon').classList.add('hide');
    flashCard.querySelector('.wrong-icon').classList.add('hide');
}

// state 2
function toggleRightAnswer(flashCardId) {
    // show card face front
    toggleFlip(flashCardId);
    //reveal answer button hidden
    toggleRevealBtn(flashCardId)
    //right answer icon show
    toggleRightIcon(flashCardId)
    //reset button shown
    toggleResetBtn(flashCardId);

}

// state 3 
function toggleWrongAnswer(flashCardId) {
    // show card face front
    toggleFlip(flashCardId);
    //reveal answer button hidden
    toggleRevealBtn(flashCardId)
    //wrong answer icon show
    toggleWrongIcon(flashCardId);
    //reset button shown
    toggleResetBtn(flashCardId);

}

// end state 
function resetFlashcard(flashCardId) {
    toggleRevealBtn(flashCardId);
    toggleResetBtn(flashCardId);
    hideIcons(flashCardId);
}


