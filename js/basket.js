let basket = localStorage.getItem('codes') ? localStorage.getItem('codes').split(',') : [];

function updateCount(){
    document.querySelector('.basket').querySelector('span').innerText = basket.length;
}
updateCount();


function bind_buy_button(){
    let buy_btn = document.querySelectorAll('.buy');
    for(let i = 0; i < buy_btn.length; i++){
        buy_btn[i].addEventListener('click', function(){
            basket.push(this.id);
            localStorage.setItem('codes', basket.join(','));
            updateCount();
        });
    }
}


function bind_plus(){
    let plus = document.querySelectorAll('.plus');
    for(let i = 0; i < plus.length; i++){
        plus[i].addEventListener('click', function(){
            basket.push(this.parentNode.parentNode.parentNode.id);
            localStorage.setItem('codes', basket.join(','));
            
            updateCount();
            document.querySelector('tbody').innerHTML = '';
            listBasket();
        });
    }
}


function bind_minus(){
    let minus = document.querySelectorAll('.minus');
    for(let i = 0; i < minus.length; i++){
        minus[i].addEventListener('click', function(){
            for (let j = 0; j < basket.length; j++) {
                if (basket[j] == this.parentNode.parentNode.parentNode.id) {
                    basket.splice(j, 1); 
                    break; 
                }
            }
            localStorage.setItem('codes', basket.join(','));
            
            updateCount();
            document.querySelector('tbody').innerHTML = '';
            listBasket();
        });
    }
}


function bind_deleter(){
    let deleter = document.querySelectorAll('.deleter');
    for(let i = 0; i < deleter.length; i++){
        deleter[i].addEventListener('click', function(){
            basket = basket.filter(id => id !== this.parentNode.parentNode.id);
            localStorage.setItem('codes', basket.join(','));
            updateCount();
            document.querySelector('tbody').innerHTML = '';
            listBasket();
        });
    }
}


function addRow(gun, count, id){
    let name = gun.querySelector('name').textContent;
    let img = gun.querySelectorAll('image')[0].textContent;
    
    let price;
    let prices = gun.getElementsByTagName('new_price');
    if (prices.length != 0) price = prices[0].textContent;
    else price = gun.querySelector('price').textContent;
    price = price.replace(' BYN', '');
    
    document.querySelector('tbody').innerHTML += `
        <tr id="${id}">
            <td>
                <img src="img/krestik.jpg" alt="" class="deleter">
            </td>
            <td>
                <img src="${img}" alt="">
            </td>
            <td>${name}</td>
            <td id="price">${price}</td>
            <td>
                <div class="counter">
                    <div class="plus">+</div>
                    <div class="count">${count}</div>
                    <div class="minus">-</div>
                </div>
            </td>
            <td id="sum">${price * count}</td>
        </tr>
    `;
}


function listBasket(){

    fetch('../database/base.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml"); 
            const guns = xmlDoc.getElementsByTagName('pistol');

            let created = [];
            basket.forEach(id => {
                if(!created.includes(id)){
                    for (let i = 0; i < guns.length; i++) {
                        if(guns[i].getElementsByTagName('prod_code')[0].textContent == id){
                            gun = guns[i];
                            break;
                        }
                    }
                    let count = 0;
                    basket.forEach(id_ => {
                        if (id_ == id) count += 1;
                    })
                    addRow(gun, count, id);
                }
                created.push(id);
            });

            bind_deleter();
            bind_plus();
            bind_minus();
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
}