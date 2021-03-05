let mainPage = {
//------------------------------------------------------------------------------
      setPages: [tableItem={name: 'Товары', description: 'Все товары оформлены в виде таблицы. Используется для заполнения цены', option: 'tableItem',func: 'tradeTablePage',},
                 filterItem={name: 'Фильтр', description: 'Используется для составления маршрута купли-продажи', option: 'filterItem',func: 'filterPage',},
                 station={name: 'Локации', description: 'Просмотр всех локаций доступных в игре', option: 'station',func: '',},
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
                        <div onclick="if(event.clientX == mainPage.coordinates){start.startPage(${this.setPages[i].func})}" class='mainPage_kartochka'>,<img src="sys_img/${this.setPages[i].option}.png"/><div><h3>${this.setPages[i].name}</h3></div>
                        </div>
                  `
            }
            app.innerHTML = `<div onmousedown='mainPage.coordinates = event.clientX; mainPage.userLeftClick = true; document.getElementById("mainPage_Filled").style.opacity = 0'
                                  onmousemove='mainPage.shiftKartochka(event.clientX)'
                                  onmouseup='mainPage.userLeftClick = false; document.getElementById("mainPage_Filled").style.opacity = 0.3'
                                  class='mainPage_start'
                                  style='transition: 1s ease-out 0.3s;'>

                                  <div style='margin-left: 0px;' class='mainPage_decorate'>${kartochka}</div>

                                  ${this.getMobile()}

                            </div>`
            document.body.querySelector('.mainPage_start').addEventListener('touchstart',()=>{mainPage.coordinates = event.touches[0].clientX; mainPage.userLeftClick = true; document.getElementById("mainPage_Filled").style.opacity = 0})
            document.body.querySelector('.mainPage_start').addEventListener('touchend',()=>{mainPage.userLeftClick = false; document.getElementById("mainPage_Filled").style.opacity = 0.3})
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

                        if(parseInt(decorateShift.style.marginLeft)>1500){decorateShift.style.marginLeft='1500px'}
                        else if(parseInt(decorateShift.style.marginLeft)<-1500){decorateShift.style.marginLeft='-1500px'}

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
      getMobile(){
          if (window.matchMedia("screen and (max-width: 415px) and (max-height: 824px)").matches){              //они убрали handheld из Media Queries 4!
               return `<svg version="1.1" id="mainPage_Filled" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  		 viewBox="0 0 495.4 86.2" style="enable-background:new 0 0 495.4 86.2;" xml:space="preserve">
                  	<style type="text/css">
                  		.st0{fill:#C1C1C1;}
                  	</style>
                  	<path class="st0" d="M270.2,28.2c-3.2,0-5.7,2.6-5.7,5.7c0-3.2-2.6-5.7-5.7-5.7c-3.2,0-5.7,2.6-5.7,5.7c0-3.2-2.6-5.7-5.7-5.7
                  		c-3.2,0-5.7,2.6-5.7,5.7V5.7c0-3.2-2.6-5.7-5.7-5.7c-3.2,0-5.7,2.6-5.7,5.7v35.2v10.5l-6.6-8.9c-1.9-2.5-5.5-3.1-8-1.2
                  		c-2.5,1.9-3.1,5.5-1.2,8l19.2,25.8c4,6.6,11.3,11,19.6,11h0c12.7,0,23-10.3,23-23V49.1v-8.2v-7C275.9,30.7,273.4,28.2,270.2,28.2z"/>
                  	<g><path class="st0" d="M200.7,56.1C132.8,51.8,72.2,38.5,26.5,19.2l4.3-6.4L0,3.4l20.2,25.1l4.4-6.6c41.4,23.8,104,40.7,176,45.9V56.1z"/></g>
                  	<g><path class="st0" d="M293.7,56.1c67.9-4.2,128.5-17.6,174.2-36.9l-4.3-6.4l30.8-9.4l-20.2,25.1l-4.4-6.6c-41.4,23.8-104,40.7-176,45.9V56.1z"/></g>
                  </svg>`
            }
            else {
                  return `<svg version="1.1" id="mainPage_Filled" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 495.4 89.1" style="enable-background:new 0 0 495.4 89.1;" xml:space="preserve">
                            <style type="text/css">
                                .st0{fill:#C1C1C1;}
                                .st1{fill:#EA4949;}
                            </style>
                            <g><path class="st0" d="M200.7,52.7C132.8,48.5,72.2,35.1,26.5,15.8l4.3-6.4L0,0l20.2,25.1l4.4-6.6c41.4,23.8,104,40.7,176,45.9V52.7z"/></g>
                            <g><path class="st0" d="M293.7,52.7c67.9-4.2,128.5-17.6,174.2-36.9l-4.3-6.4L494.4,0l-20.2,25.1l-4.4-6.6c-41.4,23.8-104,40.7-176,45.9V52.7z"/></g>
                            <g>
                                  <g><path class="st1" d="M247.2,14.3v36.2h-22V36.3C225.2,24.2,235,14.3,247.2,14.3z"/></g>
                                      <path class="st0" d="M247.2,11.8c-13.5,0-24.5,11-24.5,24.5v28.3c0,13.5,11,24.5,24.5,24.5s24.5-11,24.5-24.5V36.3
                                            C271.7,22.8,260.7,11.8,247.2,11.8z M266.7,36.3V48h-17V17C259.3,18.2,266.7,26.4,266.7,36.3z M244.7,17v31h-17V36.3
                                            C227.7,26.4,235.1,18.2,244.7,17z M247.2,84.1c-10.8,0-19.5-8.7-19.5-19.5V53h39v11.7C266.7,75.4,258,84.1,247.2,84.1z"/></g>
                      </svg>`
            }
      },
//------------------------------------------------------------------------------
}
