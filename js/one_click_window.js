setTimeout(() => {  

    const btn = document.querySelectorAll('.one_click');
    if (btn.length != 0){
        btn[0].addEventListener('click', function(event){
            let dialog = document.getElementsByTagName('dialog')[0];
            dialog.style.display = 'block';
            dialog.style.pointerEvents = 'all';
        });
    }


    const window = document.querySelectorAll('dialog');
    if (window.length != 0){
        window[0].addEventListener('click', function(event){
            if(!event.target.closest('form')){
                window[0].style.display = 'none';
                window[0].style.pointerEvents = 'none';
            }
        });
    }



}, 100); 

