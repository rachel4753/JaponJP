const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

btnMenu.addEventListener('click', () =>{
    menu.classList.toggle('active')
})

const allLinks = document.querySelectorAll('.liste-nav');

allLinks.forEach(item => {

    item.addEventListener('clixk', () => {
        menu.classList.toggle('active')
    })
     
})

