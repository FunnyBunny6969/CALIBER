let unfoldables = document.querySelectorAll('.clickable');
for (let i = 0; i < unfoldables.length; i++) {
    unfoldables[i].addEventListener('click', function(){
        let container = unfoldables[i].parentElement.querySelector('.container');
        if (container.getBoundingClientRect().height === 0)
            container.style.height = 'auto';
        else container.style.height = '0';
    })
};