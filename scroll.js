const applynowBottom = document.getElementsByClassName('applynowbottom')[0]
const applynowButton = document.getElementById('apply-now')

applynowBottom.addEventListener('click', () => {
    window.scrollTo(0, 0)
    applynowButton.classList.add('expand')
})

