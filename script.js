const btn = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'green', 'blue', 'yellow', 'purple', 'teal', 'violet', 'gold']

body.style.backgroundColor = 'blue'

btn.addEventListener('click', changeB)

function changeB() {
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}