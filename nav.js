const menuButton = document.getElementsByClassName('menubutton')[0]

menuButton.addEventListener('click', () => {
    const navbarLinks = document.getElementsByClassName('navbarlinks')[0]
    navbarLinks.classList.toggle('active')
})