let clicked = false;
let BurgerBtn = document.querySelectorAll('.icon')[0];
BurgerBtn.addEventListener('click', function(){
    let nav = document.getElementsByTagName('nav')[0];
    if(!clicked){
        nav.style.height = '295px';
        clicked = true;
    }
    else{
        nav.style.height = '45px';
        clicked = false;
    }
});

