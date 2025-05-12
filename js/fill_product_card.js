

fetch('../database/base.xml')
    .then(response => response.text())
    .then(str => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(str, 'application/xml');
        const guns = xmlDoc.getElementsByTagName('pistol');

        const link = new URL(window.location.href);
        const prod_id = link.searchParams.get('id');
        let gun; let found = false;
        for (let i = 0; i < guns.length; i++) {
            if (prod_id == guns[i].getElementsByTagName('prod_code')[0].textContent) {
                gun = i;
                found=true;
                break;
            }
        }

        if(found){

        document.querySelector('main>h1').textContent = guns[gun].getElementsByTagName('name')[0].textContent;
        document.querySelector('p#installment').textContent = guns[gun].getElementsByTagName('installment')[0].textContent;
        
        //buttons | avalibility color
        let avalibility_line = document.querySelector('span.avalibility');
        avalibility_line.textContent = guns[gun].getElementsByTagName('avalibility')[0].textContent;
        if (guns[gun].getElementsByTagName('avalibility')[0].textContent != "В наличии"){
            avalibility_line.style.color = 'red';
            document.getElementsByClassName('buttons')[0].innerHTML = '<button class="one_click">Заказать</button>';
            document.getElementsByClassName('one_click')[0].style.width = '100%';
        }
        else{
            let buy_btn = document.querySelector('.buy');
            buy_btn.setAttribute('id', guns[gun].querySelector('prod_code').textContent);
        }







        
        //work with table
        const tags = [
        'type',
        'caliber',
        'barrel_type',
        'shot_speed',
        'prototype',
        'sight_mount',
        'under_barrel_mount',
        'energy_source',
        'shooting_mode',
        'ammunition',
        'magazine_capacity',
        'blowback',
        'bolt',
        'barrel_delay',
        'form_factor',
        'safety_lock',
        'power',
        'charge_count',
        'sight',
        'magazine_type',
        'trigger_mechanism',
        'weight',
        'overall_length',
        'barrel_length',
        'dimensions',
        'body_material',
        'barrel_material',
        'color',
        'manufacturer',
        'country',
        'warranty',
        ];

        const names = [
        'Тип',
        'Калибр, мм',
        'Тип ствола',
        'Скорость выстрела, м/с',
        'Боевой прототип',
        'Крепление для прицела',
        'Подствольное крепление',
        'Источник энергии',
        'Режим стрельбы',
        'Боеприпасы',
        'Емкость магазина',
        'Блоубэк',
        'Затвор',
        'Ствольная задержка',
        'Форм-фактор',
        'Предохранитель',
        'Мощность',
        'По количеству зарядов',
        'Прицел',
        'Тип магазина',
        'УСМ',
        'Вес, кг',
        'Общая длина, мм',
        'Длина ствола, см',
        'Габаритные размеры',
        'Материал корпуса',
        'Материал ствола',
        'Цвет',
        'Производитель',
        'Страна производства',
        'Гарантия, месяцев',
        ];

        function fill_table_block(begin, end, block_num){
            let table = ''; let content;
            for (let i = begin; i < end; i++) {
                content = guns[gun].getElementsByTagName(tags[i])[0];
                if (content){
                    table += `
                    <tr>
                        <td>${names[i]}</td>
                        <td>${content.textContent}</td>
                    </tr>
                    `;
                }
            }
            document.getElementsByTagName('tbody')[block_num].innerHTML = table;
        }
        fill_table_block(0, 21, 0);
        fill_table_block(21, 24, 1);
        fill_table_block(24, 28, 2);
        fill_table_block(28, 31, 3);

        
        //images
        document.querySelector('img.general').src = guns[gun].getElementsByTagName('images')[0].getElementsByTagName('image')[0].textContent;
        imgs = document.getElementsByClassName('galery')[0];
        imgs_links = guns[gun].getElementsByTagName('image');
        imgs.innerHTML = '';
        for (let i = 1; i < imgs_links.length; i++) {
            imgs.innerHTML += `
            <div class="img-cont">
                <img src="${imgs_links[i].textContent}" class="general">
            </div>`;
        }


        //equipment
        let bundles = guns[gun].getElementsByTagName('bundle');
        let container = document.getElementsByClassName('equipment')[0];
        let content = '';
        if (bundles.length > 0){
            content += '<h2>Выберите комплектицию</h2>';
            let new_prices = guns[gun].getElementsByTagName('new_price');
            let old_prices = guns[gun].getElementsByTagName('old_price');
            for (let i = 0; i < bundles.length; i++) {
                if (i == 0){
                    content += `
                    <div class="choice active" id="${i+1}">
                        <h2>${bundles[i].textContent}</h2>
                        <div>
                            <span class="now">${new_prices[i].textContent} BYN</span>
                            <span class="was">${old_prices[i].textContent} BYN</span>
                        </div>
                    </div>
                    `

                }
                else{
                    content += `
                    <div class="choice" id="${i+1}">
                        <h2>${bundles[i].textContent}</h2>
                        <div>
                            <span class="now">${new_prices[i].textContent} BYN</span>
                            <span class="was">${old_prices[i].textContent} BYN</span>
                        </div>
                    </div>
                    `
                }
            }
        }
        else{
            content += `<h1>${guns[gun].getElementsByTagName('price')[0].textContent}</h1>`;
            document.getElementsByClassName('set')[0].innerHTML = '';
            document.getElementsByClassName('set')[0].style.display = 'none';
            document.querySelector('.info .container').style.height = 'auto';
            document.querySelector('.equipment').style.width = "100%";
        }
        content +=  container.innerHTML;
        container.innerHTML = content;
        
        equipment_block_builder(1);
        add_event_for_equipment();
        make_gallery_clickable();
        add_one_click_window();
        bind_buy_button();
        }
        else{
            alert('Товара с таким ID в базе не обнаружено');
        }

    })
    .catch(error => console.error('Ошибка:', error));