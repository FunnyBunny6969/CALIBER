

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
        
        let avalibility_line = document.querySelector('span.avalibility');
        avalibility_line.textContent = guns[gun].getElementsByTagName('avalibility')[0].textContent;
        if (guns[gun].getElementsByTagName('avalibility')[0].textContent != "В наличии"){
            avalibility_line.style.color = 'red';
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




        }
        else{
            alert('Товара с таким ID в базе не обнаружено');
        }

    })
    .catch(error => console.error('Ошибка:', error));