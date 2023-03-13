document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

document.querySelector('button#ex').addEventListener('click', (event) => {
    document.querySelector('#ipartitura').value = 'aaw aaw sw xqz zew zewaa dssdw zzcw xqc xqc dcc';
});

document.querySelector('button#play').addEventListener('click', (event) => {
    let part = document.querySelector('#ipartitura').value;

    if (part) {
        let partArray = part.split('');
        playComposition(partArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#i${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('click');
        setTimeout(() => {
            keyElement.classList.remove('click');
        }, 200);
    }
};

function playComposition(partArray) {
    let wait = 0;
    for (let i of partArray) {
        setTimeout(() => {
            playSound(`key${i}`);
        }, wait);

        wait+= 250;
    }
};