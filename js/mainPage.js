let mainPage = {
//------------------------------------------------------------------------------
      setPages: [tableItem={name: 'Товары', description: 'Все товары оформлены в виде таблицы. Используется в основном для заполнения цены', option: 'tableItem'},
                 filterItem={name: 'Фильтр', description: 'Используется для составления маршрута купли-продажи', option: 'filterItem'},
                 station={name: 'Локации', description: 'Просмотр всех локаций доступных в игре', option: 'station'},
                 guides={name: 'Гайды', description: 'Просмотр и создание гайдов по игре', option: 'guides'},
                 hz={name: 'хз', description: 'еще не придумал', option: 'hz'},
                ],
      interval: null,
      tempKostil: true,
      userLeftClick: false,
      coordinates: '',

//------------------------------------------------------------------------------
      addKartochka(){
            let kartochka = ''
            for(i in this.setPages){
                  kartochka += `
                        <div class='mainPage_kartochka'><img src="sys_img/${this.setPages[i].option}.jpg"/><h3>${this.setPages[i].name}</h3><p>${this.setPages[i].description}</p>
                        </div>
                  `
            }
            app.innerHTML = `<div onmousedown='mainPage.coordinates = event.clientX; mainPage.userLeftClick = true'
                                  onmousemove='mainPage.shiftKartochka(event.clientX)'
                                  onmouseup='mainPage.userLeftClick = false'
                                  class='mainPage_start'>

                                  <div style='margin-left: 0px;' class='mainPage_decorate'>${kartochka}</div>

                            </div>`
      },
//------------------------------------------------------------------------------
      shiftKartochka(n){                                                        //я уйму способов перепробывал чтоб это действие заработало из-за (не)работы event.clientX в settimeout`е
            if(this.userLeftClick && this.tempKostil){
                  this.tempKostil = false
                  clearInterval(this.interval)
                  this.interval = setTimeout(()=>{
                        let decorateShift = document.body.querySelector('.mainPage_decorate')
                        let shift = parseInt(decorateShift.style.marginLeft) + -((this.coordinates - n)*4) +'px';
                        decorateShift.style.marginLeft = shift

                        if(parseInt(decorateShift.style.marginLeft)>4000){decorateShift.style.marginLeft='4000px'}
                        else if(parseInt(decorateShift.style.marginLeft)<-4000){decorateShift.style.marginLeft='-4000px'}

                        this.coordinates = n;
                        this.tempKostil = true;
                  },100)
            }
      },
//------------------------------------------------------------------------------
}

mainPage.addKartochka()
