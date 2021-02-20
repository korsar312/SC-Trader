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
            app.innerHTML = `<div onmousedown='mainPage.coordinates = event.clientX; mainPage.userLeftClick = true; document.getElementById("mainPage_Filled").style.opacity = 0'
                                  onmousemove='mainPage.shiftKartochka(event.clientX)'
                                  onmouseup='mainPage.userLeftClick = false; document.getElementById("mainPage_Filled").style.opacity = 0.09'
                                  class='mainPage_start'
                                  style='transition: 1s ease-out 0.3s;'>

                                  <div style='margin-left: 0px;' class='mainPage_decorate'>${kartochka}</div>

                                  <svg id="mainPage_Filled" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m192 424a23.928 23.928 0 0 1 -16.971-7.029l-144-144a24 24 0 0 1 0-33.942l144-144a24 24 0 0 1 33.942 33.942l-127.03 127.029 127.03 127.029a24 24 0 0 1 -16.971 40.971z" fill="#cfd2fc"/><path d="m320 424a24 24 0 0 1 -16.971-40.971l127.03-127.029-127.03-127.029a24 24 0 0 1 33.942-33.942l144 144a24 24 0 0 1 0 33.942l-144 144a23.928 23.928 0 0 1 -16.971 7.029z" fill="#cfd2fc"/><path d="m192.01 432a31.8 31.8 0 0 1 -22.63-9.372l-144.021-144.007a32.035 32.035 0 0 1 0-45.257l144.021-144.007a32 32 0 0 1 45.261 45.257l-121.39 121.378 121.39 121.378a32 32 0 0 1 -22.631 54.63zm-11.31-20.687a16 16 0 1 0 22.631-22.629l-127.053-127.035a8 8 0 0 1 0-11.314l127.048-127.035a16 16 0 1 0 -22.626-22.628l-144.026 144.006a16 16 0 0 0 0 22.629z"/><path d="m319.99 432a32 32 0 0 1 -22.631-54.63l121.39-121.378-121.39-121.378a32 32 0 0 1 45.261-45.257l144.021 144.007a32.035 32.035 0 0 1 0 45.257l-144.021 144.006a31.8 31.8 0 0 1 -22.63 9.373zm0-336.007a16 16 0 0 0 -11.316 27.307l127.048 127.035a8 8 0 0 1 0 11.314l-127.048 127.035a16 16 0 0 0 22.631 22.629l144.021-144.006a16 16 0 0 0 0-22.629l-144.021-144.007a15.956 15.956 0 0 0 -11.315-4.678z"/></svg>

                            </div>`
            document.body.querySelector('.mainPage_start').addEventListener('touchstart',()=>{mainPage.coordinates = event.touches[0].clientX; mainPage.userLeftClick = true; document.getElementById("mainPage_Filled").style.opacity = 0})
            document.body.querySelector('.mainPage_start').addEventListener('touchend',()=>{mainPage.userLeftClick = false; document.getElementById("mainPage_Filled").style.opacity = 0.09})
            document.body.querySelector('.mainPage_start').addEventListener('touchmove',()=>{mainPage.shiftKartochka(event.touches[0].clientX)})

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

                        if(parseInt(decorateShift.style.marginLeft)>3000){decorateShift.style.marginLeft='3000px'}
                        else if(parseInt(decorateShift.style.marginLeft)<-3000){decorateShift.style.marginLeft='-3000px'}

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
