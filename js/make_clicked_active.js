const boxes = document.querySelectorAll('.block');
boxes.forEach(box => {
    box.addEventListener("click", function(event) {
        const self_id = this.id;
        let cards = document.getElementsByClassName('other-info-box');
        let btns = document.getElementsByClassName('block');

        for (let i = 0; i < 4; i++) {
            cards[i].style.zIndex = '0';
            btns[i].classList.remove('active'); 
        }
        cards[self_id-1].style.zIndex = '1';
        btns[self_id - 1].classList.add('active'); 

    });
});

setTimeout(() => { //тк элементы choice для выбора комплектации создаются в другом скрипте
    // при загрузке страницы их не существует, они появятся (или не появятся) через какое-то время
    // да способ далеко не самый изящный, но в целом, пользователь обойдётся первые 100 милисекунд без кликания

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
}, 100); 

setTimeout(() => {  //этот же прикол с картинками

const images = document.querySelectorAll('img.general');
if (images.length != 0){
    images.forEach(image => {
        image.addEventListener('click', function(event){
            images[0].src = this.src;
        });
    });
}
}, 100); 



