const img = document.getElementById('img-btn')
const contacts = document.getElementById('btn-contacts')

const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand)
} 

const soundsMap = {
    1: '1.mp3',
    2: '2.mp3',
    3: '3.mp3',
}

const randomAudio = () => {
    const sound = new Audio()
    if (randomInteger(1, 3) === 1) {
        sound.src = soundsMap[1]
        sound.play()
    } else if (randomInteger(1, 3) === 2) {
        sound.src = soundsMap[2]
        sound.play()
    } else {
        sound.src = soundsMap[3]
        sound.play()
    }
}

img.onclick = () => {
    randomAudio()
}

contacts.onclick = () => {
    window.location.href = 'contacts.html'
}