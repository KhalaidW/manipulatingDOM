// Menu data structure
var menuLinks = [

    { text: 'about', href: '/about' },

    {
        text: 'catalog', href: '#', subLinks: [

            { text: 'all', href: '/catalog/all' },

            { text: 'top selling', href: '/catalog/top' },

            { text: 'search', href: '/catalog/search' },

        ]
    },

    {
        text: 'orders', href: '#', subLinks: [

            { text: 'new', href: '/orders/new' },

            { text: 'pending', href: '/orders/pending' },

            { text: 'history', href: '/orders/history' },

        ]
    },

    {
        text: 'account', href: '#', subLinks: [

            { text: 'profile', href: '/account/profile' },

            { text: 'sign out', href: '/account/signout' },

        ]
    },

];

const mainEl = document.querySelector('main')

mainEl.style.backgroundColor = 'var(--main-bg)'

mainEl.innerHTML = `<h1>DOM Manipulation</h1>`

mainEl.classList.add('flex-ctr')

const topMenuEl = document.getElementById("top-menu")



topMenuEl.style.height = '100%'

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.add('flex-around')

topMenuEl.addEventListener('click', (click) => {
    click.preventDefault()
    if (click.target.tagName !== 'A') return
    console.log(click.target.textContent)

    topMenuLinks.forEach(link => {
        if (link !== click.target) link.classList.remove('active')
    })

    const linkObj = menuLinks.find(
        link => link.text === click.target.textContent.toLowerCase()
    )

    if (!click.target.classList.contains('active')) {
        click.target.classList.add('active')

        if (linkObj && linkObj.subLinks) {
            subMenuEl.style.top = '100%'
            buildSubmenu(linkObj.subLinks)
        } else {
            subMenuEl.style.top = '0'
            subMenuEl.innerHTML = ''
        }
    } else {
        click.target.classList.remove('active')
        subMenuEl.style.top = '0'
        subMenuEl.innerHTML = ''
    }

        if (click.target.textContent === 'about') {
        mainEl.innerHTML = `<h1>about</h1>`
    } 
    // click.target.classList.toggle('active')
});

const subMenuEl = document.getElementById('sub-menu')

subMenuEl.style.height = '100%'

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

subMenuEl.classList.add('flex-around')

subMenuEl.style.position = 'absolute'

subMenuEl.style.top = '0'

subMenuEl.addEventListener('click', (click) => {
    click.preventDefault()
    if (click.target.tagName !== 'A') return
    console.log(click.target.textContent)

    subMenuEl.style.top = '0'

    topMenuLinks.forEach(link => link.classList.remove('active'))

    const text = click.target.textContent
    mainEl.innerHTML = `<h1>${text}</h1>`
    
});

function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = ''

  subLinks.forEach(link => {
    const a = document.createElement('a')
    a.href = link.href
    a.textContent = link.text
    subMenuEl.appendChild(a)
  })
}

for (let link of menuLinks) {

    let anchor = document.createElement("a")

    anchor.setAttribute("href", link.href)

    anchor.textContent = link.text

    topMenuEl.appendChild(anchor)
}

var topMenuLinks = topMenuEl.querySelectorAll('a')

