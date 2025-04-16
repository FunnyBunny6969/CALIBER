const mainContainer = document.querySelector('.cards');
let cards_on_page = 0;
let increase = 24;

function getData() {
    fetch('../database/base.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml"); 
            const guns = xmlDoc.getElementsByTagName('pistol');


            let stop;
            if (cards_on_page + increase <= guns.length)
                stop = cards_on_page + increase;
            else stop = guns.length;

            for (let i = cards_on_page; i < stop; i++) {
                displayEl(guns[i]);
            }
            cards_on_page += increase;
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
}


function displayEl(gun){
    let name = gun.querySelector('name').textContent;
    let type = gun.querySelector('type').textContent;
    let avalibility = gun.querySelector('avalibility').textContent;
    let blowback = gun.querySelector('blowback').textContent;
    let ammunation = gun.querySelector('ammunition').textContent;
    let shot_speed = gun.querySelector('shot_speed').textContent;
    let body_material = gun.querySelector('body_material').textContent;
    let prod_code = gun.querySelector('prod_code').textContent;
    let img = gun.querySelectorAll('image')[0].textContent;

    let price;
    let prices = gun.getElementsByTagName('new_price');
    if (prices.length != 0) price = prices[0].textContent;
    else price = gun.querySelector('price').textContent;
    price = price.replace(' BYN', '');

    let color = '';
    if (avalibility != 'В наличии') color = 'style="color:red"'


    mainContainer.innerHTML += `


                <section>
                <div>
                    <a href="product.html?id=${prod_code}">
                        <img src="${img}">
                    </a>
                </div>
                
                <div class="price">
                    <span class="num">${price}</span>
                    <span>BYN</span>
                </div>
                <div class="avalibility">
                    <p ${color}>${avalibility}</p>
                </div>

                <h2>
                    <a href="product.html?id=${prod_code}">${name}</a>
                </h2>


                <div class="parameters">
                    <div class="line">
                        <p>Тип</p>
                        <div class="dots"></div>
                        <p>${type}</p>
                    </div>
                    
                    <div class="line">
                        <p>Скорость</p>
                        <div class="dots"></div>
                        <p>${shot_speed}</p>
                    </div>

                    
                    <div class="line">
                        <p>Патроны</p>
                        <div class="dots"></div>
                        <p>${ammunation}</p>
                    </div>
                    
                    <div class="line">
                        <p>Блоубэк</p>
                        <div class="dots"></div>
                        <p>${blowback}</p>
                    </div>

                    <div class="line">
                        <p>Корпус</p>
                        <div class="dots"></div>
                        <p>${body_material}</p>
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
                </section>
            `;

        
}

getData();


const btn = document.querySelectorAll('.show_more')[0];
btn.addEventListener('click', function(event){getData();});