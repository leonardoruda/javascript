let key = document.querySelectorAll('.tecla');
key.forEach((k) => {
    k.addEventListener('click', () => {
        let dataKey = k.getAttribute('data-key');
        playSound(dataKey);
    });
});

document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

document.querySelector('button#ex').addEventListener('click', (event) => {
    document.querySelector('#ipartitura').value = 'e e e e aaw aaw sw xqc xqc zew zewaa xqazzaw dssdw adcc';
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