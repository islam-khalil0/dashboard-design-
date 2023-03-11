let menuActive = document.querySelectorAll('.right .menu ul li');
let icon = document.querySelectorAll('.right .menu ul li i');
let itemName = document.querySelectorAll('.right .menu ul li small');


//control of menu 
let openMenu = document.getElementById('openMenu');
let closeMenu = document.getElementById('closeMenu');

let menu = document.querySelector('.right');

openMenu.addEventListener('click' , ()=>{
    menu.style.display = "block" ;
});

closeMenu.addEventListener('click' , ()=> {
    menu.style.display = 'none' ;
});


menuActive.forEach(item =>{
    item.addEventListener('click' , () => {
        item.classList.toggle('active');
    });
});

