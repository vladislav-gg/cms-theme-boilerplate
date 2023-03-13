document.addEventListener("DOMContentLoaded", function(event) {
    const menuLinks = document.querySelectorAll('.nav__item')
     if (menuLinks) {
       menuLinks.forEach(item => {
         const link= item.querySelector('a')
         const submenu = item.querySelector('.submenu')
         const mobileArrow = link.querySelector('.nav__top-level-link div svg')
           link.addEventListener('click', (e)=>{
               e.preventDefault()
               submenu.classList.toggle('is-expanded')
               mobileArrow.classList.toggle('mobile-expanded')
               
             })
       })
     }
 
     const mobileBurger = document.querySelector('.nav__mobile-menu-toggle')
     const navMainMenu = document.querySelector('.nav__main')
     const navHeader = document.querySelector('.container--nav')
     const navToolsWrapper = document.querySelector('.nav__tools-wrapper')
     if (mobileBurger) {
       mobileBurger.addEventListener('click', () => {
         navMainMenu.classList.toggle('mobile-expanded')
         navToolsWrapper.classList.toggle('mobile-expanded')
         mobileBurger.classList.toggle('mobile-expanded')
         navHeader.classList.toggle('mobile-expanded')
         if (navMainMenu.classList.contains('mobile-expanded')) {
           document.body.style.overflow = 'hidden'
         } else {
           document.body.style.overflow = 'visible'
         }
       })
 
     }
 
     //  Sticky nav
      document.addEventListener('DOMContentLoaded', () => {
        const mainHeader = document.querySelector('.main--header')
        if (mainHeader) {
          const observer = new IntersectionObserver(
           ([e]) => {
             mainHeader.classList.toggle('main--header__stuck', !e.isIntersecting)
           }, {
               rootMargin: '-1px 0px 0px 0px',
               threshold: [1],
           });
           observer.observe(mainHeader);
        }
   })
 
 }
)
 