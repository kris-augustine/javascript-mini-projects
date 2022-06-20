const colors = ['red', 'yellow', 'black', 'rgba(133,122,200)', '#f15025']

const btn = document.querySelector('.btn')
const color = document.querySelector('h2')

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}

btn.addEventListener('click', () => {
    // get random number from 0 - 3
    const randomNum = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNum]
    color.textContent = colors[randomNum]
})
