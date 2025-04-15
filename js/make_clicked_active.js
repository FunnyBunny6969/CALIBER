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

            let header = equipments[self_id-1].getElementsByTagName('h2')[0].textContent;
            let set = document.getElementsByClassName('set')[0];
            set.innerHTML = `
            <h2>Содержимое</h2>
            <h2>${header}</h2>
            `;

            let main_img = document.getElementsByClassName('general')[0].src;
            let name_of_gun = document.getElementsByTagName('h1')[0].textContent;
            let price = document.getElementsByClassName('now')[0].textContent;

            if(self_id == 1 && equipments.length == 4){
                set.innerHTML += `
                        <div class="card">
                            <div class="image">
                                <img src="${main_img}">
                            </div>
                            
                            <div class="right">
                                <p>${name_of_gun}</p>
                                <div class="num_price">
                                    <span class="num">1 шт.</span>
                                    <div class="price">
                                        <span class="now">${price}</span>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <span class="plus">+</span>
                        <h2>В подарок</h2>
                        
                        <div class="card">
                            <div class="image">
                                <img src="img/logo.png">
                                <div class="sale">-100%</div>
                            </div>
                            
                            <div class="right">
                                <p>Мишени ч/б 140х140 мм 50шт.</p>
                                <div class="num_price">
                                    <span class="num">1 шт.</span>
                                    <div class="price">
                                        <span class="now">0 BYN</span>
                                        <span class="was">10 BYN</span>
                                    </div>
                                </div>
                            </div>
                        </div> 
                `;
            }
            else if (self_id == 2 && equipments.length == 4){
                set.innerHTML += `
                        <div class="card">
                            <div class="image">
                                <img src="${main_img}">
                            </div>
                            
                            <div class="right">
                                <p>${name_of_gun}</p>
                                <div class="num_price">
                                    <span class="num">1 шт.</span>
                                    <div class="price">
                                        <span class="now">${price}</span>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        
                        <div class="card">
                            <div class="image">
                                <img src="img/logo.png">
                                <div class="sale">-20%</div>
                            </div>
                            
                            <div class="right">
                                <p>Шарики BB Золотая Пуля омедненные 4,5 мм (банка, 1500 штук)</p>
                                <div class="num_price">
                                    <span class="num">1 шт.</span>
                                    <div class="price">
                                        <span class="now">16 BYN</span>
                                        <span class="was">20 BYN</span>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div class="card">
                            <div class="image">
                                <img src="img/logo.png">
                                <div class="sale">-25%</div>
                            </div>
                            
                            <div class="right">
                                <p>Баллон CO2 Borner 12гр.</p>
                                <div class="num_price">
                                    <span class="num">20 шт.</span>
                                    <div class="price">
                                        <span class="now">2 BYN</span>
                                        <span class="was">3 BYN</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <span class="plus">+</span>
                        <h2>В подарок</h2>
                        
                        <div class="card">
                            <div class="image">
                                <img src="img/logo.png">
                                <div class="sale">-100%</div>
                            </div>
                            
                            <div class="right">
                                <p>Мишени ч/б 140х140 мм 50шт.</p>
                                <div class="num_price">
                                    <span class="num">1 шт.</span>
                                    <div class="price">
                                        <span class="now">0 BYN</span>
                                        <span class="was">10 BYN</span>
                                    </div>
                                </div>
                            </div>
                        </div> 
                `;
            }

        });
    });
}


}, 100); 
