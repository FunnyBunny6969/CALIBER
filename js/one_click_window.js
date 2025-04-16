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

    const krestik = document.querySelectorAll('#krestik');
    if(krestik.length != 0){
        krestik[0].addEventListener('click', function(event){
            let window = document.querySelectorAll('dialog')[0];
            window.style.display = 'none';
            window.style.pointerEvents = 'none';
        })
    }





    const contact_form = document.querySelectorAll('#contact_info');
    if(contact_form.length != 0){
        contact_form[0].addEventListener('submit', function(event) {
            event.preventDefault();

            let name = document.querySelectorAll('#name')[0].value;
            let phone = document.querySelectorAll('#phone')[0].value;
            console.log(name);
            console.log(phone);
            alert('Наш специалист скоро с вами свяжется!');
        })
    }




}, 100); 

