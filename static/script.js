/*Abre e fecha menu lateral mobile menu pica pra caraio*/

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');
const nav_item = document.querySelectorAll('.nav-item');
console.log(nav_item)

menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.contains("bi-list") 
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list");  
        body.classList.toggle("menu-nav-active");  
});

nav_item.forEach(item => {
    item.addEventListener('click', ()=>{
        if(body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list")
        }
    })
});