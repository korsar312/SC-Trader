let mainPage = {
//------------------------------------------------------------------------------
      setPages: [tableItem={},filterItem={},station={},station={},station={}],
      interval: null,
      tempKostil: true,
      userLeftClick: false,
      coordinates: '',

//------------------------------------------------------------------------------
      addKartochka(){
            let kartochka = ''
            for(i in this.setPages){
                  kartochka += `
                        <div class='mainPage_kartochka'>
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
      shiftKartochka(n){
            if(this.userLeftClick && this.tempKostil){
                  this.tempKostil = false
                  clearInterval(this.interval)
                  this.interval = setTimeout(()=>{
                        let decorateShift = document.body.querySelector('.mainPage_decorate')
                        decorateShift.style.marginLeft = parseInt(decorateShift.style.marginLeft) + -((this.coordinates - n)*4) +'px';
                        this.coordinates = n;
                        this.tempKostil = true;
                  },100)
            }
      },
//------------------------------------------------------------------------------
}

mainPage.addKartochka()
