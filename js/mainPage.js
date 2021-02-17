let mainPage = {
//------------------------------------------------------------------------------
      setPages: [tableItem={name: 'Товары', description: 'Все товары оформлены в виде таблицы. Используется для заполнения цены', option: 'tableItem',func: 'tradeTablePage',},
                 filterItem={name: 'Фильтр', description: 'Используется для составления маршрута купли-продажи', option: 'filterItem',func: 'filterPage',},
                 station={name: 'Локации', description: 'Просмотр всех локаций доступных в игре', option: 'station',func: '',},
                 guides={name: 'Гайды', description: 'Просмотр и создание гайдов по игре', option: 'guides',func: '',},
                 hz={name: 'хз', description: 'еще не придумал', option: 'hz',func: '',},
                ],
      interval: null,
      tempKostil: true,
      userLeftClick: false,
      coordinates: '',

//------------------------------------------------------------------------------
      start(){
            let kartochka = ''
            for(i in this.setPages){
                  kartochka += `
                        <div onclick="start.startPage(${this.setPages[i].func})" class='mainPage_kartochka'>,<img src="sys_img/${this.setPages[i].option}.png"/><div><h3>${this.setPages[i].name}</h3></div>
                        </div>
                  `
            }
            app.innerHTML = `<div onmousedown='mainPage.coordinates = event.clientX; mainPage.userLeftClick = true'
                                  onmousemove='mainPage.shiftKartochka(event.clientX)'
                                  onmouseup='mainPage.userLeftClick = false'
                                  class='mainPage_start'
                                  style='transition: 1s ease-out 0.3s;'>

                                  <div style='margin-left: 0px;' class='mainPage_decorate'>${kartochka}</div>

                            </div>`
            document.body.querySelector('.mainPage_decorate').addEventListener('touchstart',()=>{mainPage.coordinates = event.touches[0].clientX; mainPage.userLeftClick = true})
            document.body.querySelector('.mainPage_decorate').addEventListener('touchend',()=>{mainPage.userLeftClick = false})
            document.body.querySelector('.mainPage_decorate').addEventListener('touchmove',()=>{mainPage.shiftKartochka(event.touches[0].clientX)})
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

                        if(parseInt(decorateShift.style.marginLeft)>2000){decorateShift.style.marginLeft='2000px'}
                        else if(parseInt(decorateShift.style.marginLeft)<-2000){decorateShift.style.marginLeft='-2000px'}

                        this.coordinates = n;
                        this.tempKostil = true;
                  },100)
            }
      },
//------------------------------------------------------------------------------
      startPage(){
            if (app.children.length>0){
                  app.style.transition = 'ease-out 0.5s'
                  app.style.opacity = 0
                  for (let i=0; i<app.children.length; i++){
                        let it = app.children[i]
                        setTimeout(()=>{
                              it.remove()
                              this.startPage()
                        },500)
                  }
            }
            else{
                  this.start()
                  setTimeout(()=>app.style.opacity = 1,10) //Я НЕ ПОНИМАЮ!!!!!!!!!!!!№;"%:%;%;№;"№!"№!"!"ё!№!№" АААААА
            }

      },
//------------------------------------------------------------------------------
}
