

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
        

        document.getElementsByTagName('tbody')[0].innerHTML = `
            <tr>
                <td>Тип</td>
                <td>${guns[gun].getElementsByTagName('type')[0].textContent}</td>
            </tr>
            <tr>
                <td>Калибр, мм</td>
                <td>${guns[gun].getElementsByTagName('caliber')[0].textContent}</td>
            </tr>
            <tr>
                <td>Скорость выстрела, м/с</td>
                <td>${guns[gun].getElementsByTagName('shot_speed')[0].textContent}</td>
            </tr>
            <tr>
                <td>Боевой прототип</td>
                <td>${guns[gun].getElementsByTagName('prototype')[0].textContent}</td>
            </tr>
            <tr>
                <td>Тип ствола</td>
                <td>${guns[gun].getElementsByTagName('sight_mount')[0].textContent}</td>
            </tr>
            <tr>
                <td>Крепление для прицела</td>
                <td>${guns[gun].getElementsByTagName('under_barrel_mount')[0].textContent}</td>
            </tr>
            <tr>
                <td>Подствольное крепление</td>
                <td>${guns[gun].getElementsByTagName('under_barrel_mount')[0].textContent}</td>
            </tr>
            <tr>
                <td>Источник энергии</td>
                <td>${guns[gun].getElementsByTagName('energy_source')[0].textContent}</td>
            </tr>
            <tr>
                <td>Режим стрельбы</td>
                <td>${guns[gun].getElementsByTagName('shooting_mode')[0].textContent}</td>
            </tr>
            <tr>
                <td>Боеприпасы</td>
                <td>${guns[gun].getElementsByTagName('ammunition')[0].textContent}</td>
            </tr>
            <tr>
                <td>Емкость магазина</td>
                <td>${guns[gun].getElementsByTagName('magazine_capacity')[0].textContent}</td>
            </tr>
            <tr>
                <td>Блоубэк</td>
                <td>${guns[gun].getElementsByTagName('blowback')[0].textContent}</td>
            </tr>
            <tr>
                <td>Затвор</td>
                <td>${guns[gun].getElementsByTagName('bolt')[0].textContent}</td>
            </tr>
            <tr>
                <td>Ствольная задержка</td>
                <td>${guns[gun].getElementsByTagName('form_factor')[0].textContent}</td>
            </tr>
            <tr>
                <td>Форма-фактор</td>
                <td>${guns[gun].getElementsByTagName('weight')[0].textContent}</td>
            </tr>
            <tr>
                <td>Предохранитель</td>
                <td>${guns[gun].getElementsByTagName('overall_length')[0].textContent}</td>
            </tr>
            <tr>
                <td>Мощность</td>
                <td>${guns[gun].getElementsByTagName('body_material')[0].textContent}</td>
            </tr>
            <tr>
                <td>По количеству зарядов</td>
                <td>${guns[gun].getElementsByTagName('type')[0].textContent}</td>
            </tr>
            <tr>
                <td>Прицел</td>
                <td>${guns[gun].getElementsByTagName('type')[0].textContent}</td>
            </tr>
            <tr>
                <td>Тип магазина</td>
                <td>${guns[gun].getElementsByTagName('type')[0].textContent}</td>
            </tr>
            <tr>
                <td>УСМ</td>
                <td>${guns[gun].getElementsByTagName('type')[0].textContent}</td>
            </tr>
        `
        }
        else{
            alert('Товара с таким ID в базе не обнаружено');
        }

    })
    .catch(error => console.error('Ошибка:', error));