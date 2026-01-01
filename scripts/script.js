// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
]

const mainEl = document.querySelector('main')

mainEl.style.backgroundColor = 'var(--main-bg)'

mainEl.innerHTML = `<h1>DOM Manipulation</h1>`

mainEl.classList.add('flex-ctr')

const topMenuEl = document.getElementById("top-menu")

topMenuEl.style.height = '100%'

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.add('flex-around')

// Part 2 changes

const subMenuEl = document.getElementById('sub-menu')

subMenuEl.style.height = '100%'

subMenuEl.style.backgroundColor = 'var(--sub-manu-bg)'

subMenuEl.classList.add('flex-around')

subMenuEl.style.position = 'absolute'

subMenuEl.style.top = '0'


for (let link of menuLinks) {
    
    let anchor = document.createElement("a")

    anchor.setAttribute("href", link.href)

    anchor.textContent = link.text

    topMenuEl.appendChild(anchor)
}

