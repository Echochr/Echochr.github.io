const mobileNavBtn = document.querySelector('.mobile-nav-btn')
const mobileNav = document.querySelector('.mobile-nav')
const mobileNavCloseBtn = document.querySelector('#mobile-nav-close')
const mobileNavItems = document.querySelectorAll('.mobile-nav-item')

mobileNavBtn.addEventListener('click', () => {
    mobileNav.classList.add('moveInLeft')
})

mobileNavCloseBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('moveInLeft')
})

for (const item of mobileNavItems) {
    item.addEventListener('click', () => {
        mobileNav.classList.toggle('moveInLeft')
    })
}