const imgs = document.getElementById('imgs')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

const img = document.querySelectorAll('#imgs img')
const imgWidth = document.querySelector('.slide--item').clientWidth
console.log(imgWidth)

let index = 0

let interval = setInterval(run, 2000)

function run () {
    index++

    changeImage()
}

function changeImage() {
    if (index > img.length -1) {
        index = 0
    } else if (index < 0) {
        index = img.length - 1
    }

    imgs.style.transform = `translateX(${-index * imgWidth}px)`
}


function resetInterval () {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

next.addEventListener('click', () => {
index++
changeImage()
resetInterval()
})

prev.addEventListener('click', () => {
    index--
    changeImage()
    resetInterval()
    })