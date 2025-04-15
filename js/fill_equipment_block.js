function equipment_block_builder(self_id){
    const equipments = document.querySelectorAll('div.choice');

    let header = equipments[self_id-1].getElementsByTagName('h2')[0].textContent;
    let set = document.getElementsByClassName('set')[0];
    set.innerHTML = `
    <h2>Содержимое</h2>
    <h2>${header}</h2>
    `;

    let main_img = document.getElementsByClassName('general')[0].src;
    let name_of_gun = document.getElementsByTagName('h1')[0].textContent;
    let price = document.getElementsByClassName('now')[0].textContent;

    if(self_id == 1){
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
                        <img src="img/target.jpg">
                        <div class="sale">-100%</div>
                    </div>
                    
                    <div class="right">
                        <p>Мишени ч/б 140х140 мм</p>
                        <div class="num_price">
                            <span class="num">5 шт.</span>
                            <div class="price">
                                <span class="now">0 BYN</span>
                                <span class="was">1 BYN</span>
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
                        <img src="img/balls.jpg">
                        <div class="sale">-10%</div>
                    </div>
                    
                    <div class="right">
                        <p>Шарики BB Золотая Пуля омедненные 4,5 мм (банка, 1500 штук)</p>
                        <div class="num_price">
                            <span class="num">1 шт.</span>
                            <div class="price">
                                <span class="now">18 BYN</span>
                                <span class="was">20 BYN</span>
                            </div>
                        </div>
                    </div>
                </div> 

                <div class="card">
                    <div class="image">
                        <img src="img/co2.jpg">
                        <div class="sale">-10%</div>
                    </div>
                    
                    <div class="right">
                        <p>Баллон CO2 Borner 12гр.</p>
                        <div class="num_price">
                            <span class="num">10 шт.</span>
                            <div class="price">
                                <span class="now">27 BYN</span>
                                <span class="was">30 BYN</span>
                            </div>
                        </div>
                    </div>
                </div>

                <span class="plus">+</span>
                <h2>В подарок</h2>
                
                <div class="card">
                    <div class="image">
                        <img src="img/target.jpg">
                        <div class="sale">-100%</div>
                    </div>
                    
                    <div class="right">
                        <p>Мишени ч/б 140х140 мм</p>
                        <div class="num_price">
                            <span class="num">5 шт.</span>
                            <div class="price">
                                <span class="now">0 BYN</span>
                                <span class="was">1 BYN</span>
                            </div>
                        </div>
                    </div>
                </div> 
        `;
    }
    else if (self_id == 3 && equipments.length == 4){
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
                        <img src="img/balls.jpg">
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
                        <img src="img/co2.jpg">
                        <div class="sale">-20%</div>
                    </div>
                    
                    <div class="right">
                        <p>Баллон CO2 Borner 12гр.</p>
                        <div class="num_price">
                            <span class="num">10 шт.</span>
                            <div class="price">
                                <span class="now">24 BYN</span>
                                <span class="was">30 BYN</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <div class="image">
                        <img src="img/case.jpg">
                        <div class="sale">-20%</div>
                    </div>
                    
                    <div class="right">
                        <p>Кейс пистолетный универсальный</p>
                        <div class="num_price">
                            <span class="num">1 шт.</span>
                            <div class="price">
                                <span class="now">28 BYN</span>
                                <span class="was">35 BYN</span>
                            </div>
                        </div>
                    </div>
                </div>

                <span class="plus">+</span>
                <h2>В подарок</h2>
                
                <div class="card">
                    <div class="image">
                        <img src="img/target.jpg">
                        <div class="sale">-100%</div>
                    </div>
                    
                    <div class="right">
                        <p>Мишени ч/б 140х140 мм</p>
                        <div class="num_price">
                            <span class="num">5 шт.</span>
                            <div class="price">
                                <span class="now">0 BYN</span>
                                <span class="was">1 BYN</span>
                            </div>
                        </div>
                    </div>
                </div> 
        `;
    }
    
    else if (self_id == 4 && equipments.length == 4){
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
                        <img src="img/balls.jpg">
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
                        <img src="img/co2.jpg">
                        <div class="sale">-25%</div>
                    </div>
                    
                    <div class="right">
                        <p>Баллон CO2 Borner 12гр.</p>
                        <div class="num_price">
                            <span class="num">20 шт.</span>
                            <div class="price">
                                <span class="now">45 BYN</span>
                                <span class="was">60 BYN</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <div class="image">
                        <img src="img/case.jpg">
                        <div class="sale">-20%</div>
                    </div>
                    
                    <div class="right">
                        <p>Кейс пистолетный универсальный</p>
                        <div class="num_price">
                            <span class="num">1 шт.</span>
                            <div class="price">
                                <span class="now">28 BYN</span>
                                <span class="was">35 BYN</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <div class="image">
                        <img src="img/glasses.jpg">
                        <div class="sale">-20%</div>
                    </div>
                    
                    <div class="right">
                        <p>Очки тактические для стрельбы защитные открытые Target</p>
                        <div class="num_price">
                            <span class="num">1 шт.</span>
                            <div class="price">
                                <span class="now">20 BYN</span>
                                <span class="was">25 BYN</span>
                            </div>
                        </div>
                    </div>
                </div>

                <span class="plus">+</span>
                <h2>В подарок</h2>
                
                <div class="card">
                    <div class="image">
                        <img src="img/target.jpg">
                        <div class="sale">-100%</div>
                    </div>
                    
                    <div class="right">
                        <p>Мишени ч/б 140х140 мм</p>
                        <div class="num_price">
                            <span class="num">5 шт.</span>
                            <div class="price">
                                <span class="now">0 BYN</span>
                                <span class="was">1 BYN</span>
                            </div>
                        </div>
                    </div>
                </div> 
        `;
    }
    




    else if (self_id == 2 && equipments.length == 3){
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
                        <img src="img/bullets.jpg">
                        <div class="sale">-10%</div>
                    </div>
                    
                    <div class="right">
                        <p>Пули пневматические Crosman Wadcutter 4,5 мм 7,4 гран (500 шт.)</p>
                        <div class="num_price">
                            <span class="num">1 шт.</span>
                            <div class="price">
                                <span class="now">36 BYN</span>
                                <span class="was">40 BYN</span>
                            </div>
                        </div>
                    </div>
                </div> 

                <div class="card">
                    <div class="image">
                        <img src="img/glasses.jpg">
                        <div class="sale">-20%</div>
                    </div>
                    
                    <div class="right">
                        <p>Очки тактические для стрельбы защитные открытые Target</p>
                        <div class="num_price">
                            <span class="num">1 шт.</span>
                            <div class="price">
                                <span class="now">20 BYN</span>
                                <span class="was">25 BYN</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <div class="image">
                        <img src="img/gun_oil.jpg">
                        <div class="sale">-30%</div>
                    </div>
                    
                    <div class="right">
                        <p>Масло Беркут оружейное нейтральное 150 мл</p>
                        <div class="num_price">
                            <span class="num">1 шт.</span>
                            <div class="price">
                                <span class="now">10 BYN</span>
                                <span class="was">7 BYN</span>
                            </div>
                        </div>
                    </div>
                </div>

                <span class="plus">+</span>
                <h2>В подарок</h2>
                
                <div class="card">
                    <div class="image">
                        <img src="img/target.jpg">
                        <div class="sale">-100%</div>
                    </div>
                    
                    <div class="right">
                        <p>Мишени ч/б 140х140 мм</p>
                        <div class="num_price">
                            <span class="num">5 шт.</span>
                            <div class="price">
                                <span class="now">0 BYN</span>
                                <span class="was">1 BYN</span>
                            </div>
                        </div>
                    </div>
                </div> 
        `;
    }
    else if (self_id == 3 && equipments.length == 3){
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
                        <img src="img/bullets.jpg">
                        <div class="sale">-10%</div>
                    </div>
                    
                    <div class="right">
                        <p>Пули пневматические Crosman Wadcutter 4,5 мм 7,4 гран (500 шт.)</p>
                        <div class="num_price">
                            <span class="num">1 шт.</span>
                            <div class="price">
                                <span class="now">36 BYN</span>
                                <span class="was">40 BYN</span>
                            </div>
                        </div>
                    </div>
                </div> 

                <div class="card">
                    <div class="image">
                        <img src="img/glasses.jpg">
                        <div class="sale">-20%</div>
                    </div>
                    
                    <div class="right">
                        <p>Очки тактические для стрельбы защитные открытые Target</p>
                        <div class="num_price">
                            <span class="num">1 шт.</span>
                            <div class="price">
                                <span class="now">20 BYN</span>
                                <span class="was">25 BYN</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <div class="image">
                        <img src="img/bullet_trap.jpg">
                        <div class="sale">-10%</div>
                    </div>
                    
                    <div class="right">
                        <p>Пулеулавливатель плоский Target Shot T-1</p>
                        <div class="num_price">
                            <span class="num">1 шт.</span>
                            <div class="price">
                                <span class="now">27 BYN</span>
                                <span class="was">30 BYN</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="img/gun_oil.jpg">
                        <div class="sale">-30%</div>
                    </div>
                    
                    <div class="right">
                        <p>Масло Беркут оружейное нейтральное 150 мл</p>
                        <div class="num_price">
                            <span class="num">1 шт.</span>
                            <div class="price">
                                <span class="now">10 BYN</span>
                                <span class="was">7 BYN</span>
                            </div>
                        </div>
                    </div>
                </div>

                <span class="plus">+</span>
                <h2>В подарок</h2>
                
                <div class="card">
                    <div class="image">
                        <img src="img/target.jpg">
                        <div class="sale">-100%</div>
                    </div>
                    
                    <div class="right">
                        <p>Мишени ч/б 140х140 мм</p>
                        <div class="num_price">
                            <span class="num">5 шт.</span>
                            <div class="price">
                                <span class="now">0 BYN</span>
                                <span class="was">1 BYN</span>
                            </div>
                        </div>
                    </div>
                </div> 
        `;
    }
}