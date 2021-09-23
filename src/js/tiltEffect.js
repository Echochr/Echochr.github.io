const cardListOne = []
const cardListTwo = []

const homeCard = document.querySelector(".home-container")
const recentWorksCards = document.querySelectorAll(".recent-works-card")
const skillsCards = document.querySelectorAll(".skills-card")
cardListOne.push(homeCard)
cardListTwo.push(...recentWorksCards)
cardListOne.push(...skillsCards)

cardListOne.map(card => {
    VanillaTilt.init(card, {
        max: 20,
        speed: 400,
        glare: true,
        "max-glare": .6
    });
})
        
cardListTwo.map(card => {
    VanillaTilt.init(card, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": .2
    });
})