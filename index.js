const mobileNavBtn = document.querySelector('.mobile-nav-btn')
const mobileNav = document.querySelector('.mobile-nav')
const mobileNavCloseBtn = document.querySelector('#mobile-nav-close')
const mobileNavItems = document.querySelectorAll('.mobile-nav-item')
const weatherIcon = document.querySelector('.weather-icon')
const temperature = document.querySelector('.temperature')
const todayDate = document.querySelector('.date')

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

const getHKOWeatherData = async () => {
    const res = await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en')
    const data = await res.json()
    const hkoTemp = data.temperature.data[1].value
    const hkoIcon = data.icon[0]
    const hkoDate = data.iconUpdateTime.split('T')[0].split('-')

    let icon
    const obj = {
        50: 'sun',
        51: 'cloud-sun',
        53: 'cloud-sun-rain',
        60: 'cloud',
        62: 'cloud-rain',
        64: 'cloud-showers-heavy',
        65: 'bolt',
        70: 'moon',
        76: 'cloud-moon',
        77: 'moon',
        80: 'wind',
        81: 'leaf',
        82: 'tint',
        83: 'smog',
        90: 'temperature-high',
        92: 'temperature-low'
    }
    if (hkoIcon >= 92) icon = obj[92]
    else if (hkoIcon >= 90) icon = obj[90]
    else if (hkoIcon >= 83) icon = obj[83]
    else if (hkoIcon == 82) icon = obj[82]
    else if (hkoIcon == 81) icon = obj[81]
    else if (hkoIcon == 80) icon = obj[80]
    else if (hkoIcon == 77) icon = obj[77]
    else if (hkoIcon == 76) icon = obj[76]
    else if (hkoIcon >= 70) icon = obj[70]
    else if (hkoIcon == 65) icon = obj[65]
    else if (hkoIcon == 64) icon = obj[64]
    else if (hkoIcon >= 62) icon = obj[62]
    else if (hkoIcon >= 60) icon = obj[60]
    else if (hkoIcon >= 53) icon = obj[53]
    else if (hkoIcon >= 51) icon = obj[51]
    else if (hkoIcon == 50) icon = obj[50]
    
    weatherIcon.innerHTML = `<i class="fas fa-${icon}"></i>`
    temperature.innerHTML = `${hkoTemp}&#8451;`
    todayDate.innerHTML = `${hkoDate[2]}-${hkoDate[1]}-${hkoDate[0]}`
}
getHKOWeatherData()
