const boxes = document.querySelectorAll('.block');
boxes.forEach(box => {
    box.addEventListener("click", function(event) {
        const self_id = this.id;
        let cards = document.getElementsByClassName('other-info-box');
        let btns = document.getElementsByClassName('block');

        for (let i = 0; i < 4; i++) {
            cards[i].style.zIndex = '0';
            cards[i].style.display = 'none';
            btns[i].classList.remove('active'); 
        }
        cards[self_id- 1].style.zIndex = '1';
        cards[self_id - 1].style.display = 'block';
        btns[self_id - 1].classList.add('active'); 
    });
});

function add_event_for_equipment(){ 

    const equipments = document.querySelectorAll('div.choice');
    if (equipments.length != 0){
        equipments.forEach(equipment => {
            equipment.addEventListener('click', function(event){
                const self_id = this.id;
                for (let i = 0; i < equipments.length; i++)
                    equipments[i].classList.remove('active');
                equipments[self_id - 1].classList.add('active');

                equipment_block_builder(self_id);
            });
        });
    }
}

function make_gallery_clickable(){
    const images = document.querySelectorAll('img.general');
    if (images.length != 0){
        images.forEach(image => {
            image.addEventListener('click', function(event){
                images[0].src = this.src;
            });
        });
    }
}



