const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const colors = ['green', 'red', 'rebeccapurple']


button.addEventListener('click', () => createNotifcation())


function createNotifcation() {

    const notification = document.createElement('div')
    notification.classList.add('toast')
    notification.classList.add(getRandomColor())
    notification.innerText = getRandomMessage()

    toasts.appendChild(notification)

    setTimeout(() => {
        notification.remove()
    }, 3000)
}


function getRandomMessage() {
    return messages[Math.floor(Math.random() * (messages.length))];

}


function getRandomColor() {
    return colors[Math.floor(Math.random() * (colors.length))];

}


