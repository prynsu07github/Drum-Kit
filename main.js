const DrumKits = document.querySelectorAll(".drums")

for (let i = 0; i < DrumKits.length; i++) {
    DrumKits[i].addEventListener("click", function () {
    produceSound(this.innerHTML)
    buttonAnimation(this.classList[1])
    })
}

document.addEventListener("keydown", function (event) {
    console.log(event.key)
    produceSound(event.key.toUpperCase())
    buttonAnimation(event.key.toUpperCase())
})

function produceSound(key){
    switch (key) {
        case "Q":
            const audio = new Audio('tom-1.mp3')
            audio.play()
            break
        case "W":
            const audio1 = new Audio('tom-2.mp3')
            audio1.play()
            break
        case "E":
            const audio2 = new Audio('tom-3.mp3')
            audio2.play()
            break
        case "R":
            const audio3 = new Audio('tom-4.mp3')
            audio3.play()
            break
        case "T":
            const audio4 = new Audio('crash.mp3')
            audio4.play()
            break
        case "Y":
            const audio5 = new Audio('kick-bass.mp3')
            audio5.play()
            break
        case "U":
            const audio6 = new Audio('snare.mp3')
            audio6.play()
            break
    }

}

function buttonAnimation(key){
    document.querySelector(`.${key}`).classList.add("pressed")
    setTimeout(function(){
        document.querySelector(`.${key}`).classList.remove("pressed")
    } , 100)
}