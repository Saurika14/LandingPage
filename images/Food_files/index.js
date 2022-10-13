const gallery = ['./img/gallery-1','./img/gallery-2','./img/gallery-3','./img/gallery-4','./img/gallery-5','./img/gallery-6','./img/gallery-7','./img/gallery-8','./img/gallery-9','./img/gallery-10','./img/gallery-11','./img/gallery-12']

const testimonials = [
    {
        id:1,
        name: "Dave Bryson",
        src: './img/dave',
        desc: 'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.'
    },
    {
        id:2,
        name: "Ben Hadley",
        src: './img/ben',
        desc: " The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!"
    },
    {
        id:3,
        name: "Steve Miller",
        src: './img/steve',
        desc: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!"
    },
    {
        id:4,
        name: "Hannah Smith",
        src: './img/hannah',
        desc: "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic."
    }
]

const insertImg = document.querySelector('.gallery')
const insertIestimonial = document.querySelector('.testimonials')

function insert() {
    gallery.map(image => {
        const img = new Image()
        img.src = `${image}.jpg`
        img.classList.add('gallary-item')
        insertImg.append(img)
    })

    testimonials.map(testi => {
        const div = document.createElement('div')
        div.classList.add('testimonial')
        div.innerHTML = `
        <img src="${testi.src}.jpg" alt=""/>
        <p>${testi.desc}</p>
        <h6> -${testi.name}</h6>`
        insertIestimonial.append(div)
    })

}

insert()

const nav = document.querySelector('.header')
window.addEventListener('scroll', function(){
    nav.classList.toggle('sticky', window.scrollY > 500)
})

const mainNav = document.querySelector('.main-nav')
document.querySelector(".toggle").addEventListener('click', ()=> {
    mainNav.classList.toggle('active')
})

document.onclick = function(e) { 
    if(e.target.classList != 'main-nav ul li' && e.target.classList != 'toggle') {
        console.log(e.target.classList)
        mainNav.classList.remove('active')
    }
}

