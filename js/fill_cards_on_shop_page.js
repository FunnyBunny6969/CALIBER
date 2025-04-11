const mainElement = document.querySelector('main');



fetch('../database/air_pistols.xml')
    .then(response => response.text())
    .then(str => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(str, 'application/xml');
        const items = xmlDoc.getElementsByTagName('pistol');

        const data = Array.from(items).map(item => ({
            name: item.querySelector('name').textContent,
            price: item.querySelector('price').textContent,
            avalibility: item.querySelector('avalibility').textContent,
            blowback: item.querySelector('blowback').textContent,
            ammunation: item.querySelector('ammunition').textContent,
            muzzle_velocity: item.querySelector('muzzle_velocity_m_s').textContent,
            type: item.querySelector('type').textContent,
            body_material: item.querySelector('body_material').textContent,
        }));
        

        const main_cont = document.getElementsByClassName('cards')[0];
        data.forEach(item => {
            let section = document.createElement('section');

            section.innerHTML = `
                <div>
                    <img src="img/desert eagle.jpg">
                </div>
                
                <div class="price">
                    <span class="num">${item.price}</span>
                    <span>BYN</span>
                </div>
                <div class="avalibility">
                    <p>${item.avalibility}</p>
                </div>

                <h2>${item.name}</h2>


                <div class="parameters">
                    <div class="line">
                        <p>Тип</p>
                        <div class="dots"></div>
                        <p>${item.type}</p>
                    </div>
                    
                    <div class="line">
                        <p>Скорость</p>
                        <div class="dots"></div>
                        <p>${item.muzzle_velocity}</p>
                    </div>

                    
                    <div class="line">
                        <p>Патроны</p>
                        <div class="dots"></div>
                        <p>${item.ammunation}</p>
                    </div>
                    
                    <div class="line">
                        <p>Блоубэк</p>
                        <div class="dots"></div>
                        <p>${item.blowback}</p>
                    </div>

                    <div class="line">
                        <p>Корпус</p>
                        <div class="dots"></div>
                        <p>${item.body_material}</p>
                    </div>
                </div>

                <div class="buttons">
                    <button class="buy">
                        КУПИТЬ
                    </button>
                    <button class="one_click">
                        В ОДИН КЛИК
                    </button>
                </div>
            `;

            

            main_cont.appendChild(section);
            
        })

    })
    .catch(error => console.error('Ошибка:', error));