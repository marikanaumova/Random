const music = document.getElementById('btn-music')
const song = new Audio(`background.mp3`)
const text = document.getElementById('warning')


music.onclick = () => {
    song.play()
    setTimeout( () => {
        text.style.display = 'flex'
    }, 5000)
}


