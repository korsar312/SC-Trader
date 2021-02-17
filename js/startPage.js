let startPage ={
//------------------------------------------------------------------------------
      timerId: null,
      heightRedSquer: 0,
      botScuareRed(){return document.body.querySelector('.redScuareInSide')},
//------------------------------------------------------------------------------
      starterPage(){                                                            //чтоб багов с кликами не было можно это всё прописать в css, а тут только класс менять, но там нужно на каждую букву свой класс со всоим transition, так что пусть пока так будет
            let mainDiv = document.createElement('div')
            mainDiv.className = `startPageStarter`
            mainDiv.id = `startPageStarterID`
            mainDiv.innerHTML = `
                  <div onmousedown="startPage.userZajal('scale(1.8)',1  ,'3vmin','linear 1s',100,'#424242','не использ','не использ','не использ',true,'115px',1 ,8)"
                       onmouseup="startPage.userZajal('scale(1)'  ,0.5,'4vmin','ease-out 0.5s',100,'#AAB','не использ','не использ','не использ',true,'0px'  ,-1,5)"
                       class='startPageflexbox'>
                        <div class='startPageIcoAndGame'>
                              <div class='startPageIco'>
                              </div>

                              <div class='startPageGame'>
                              </div>
                        </div>
                        <div class='startPageNameProg'>
                             <span style='opacity: 0; margin-left: 170px; transform: scale(1.5);' class='starTrader starTrader5'>S</span>
                             <span style='opacity: 0; margin-left: 140px; transform: scale(1.5);' class='starTrader starTrader4'>T</span>
                             <span style='opacity: 0; margin-left: 110px; transform: scale(1.5);' class='starTrader starTrader3'>A</span>
                             <span style='opacity: 0; margin-left: 80px; transform: scale(1.5);' class='starTrader starTrader2'>R</span>
                             <span style='opacity: 0; margin-left: 50px; transform: scale(1.5);' class='starTrader starTrader1'>&nbsp;</span>
                             <span style='opacity: 0; transform: scale(1.5);' class='starTrader starTrader0'>T</span>
                             <span style='opacity: 0; margin-left: 50px; transform: scale(1.5);' class='starTrader starTrader1'>R</span>
                             <span style='opacity: 0; margin-left: 80px; transform: scale(1.5);' class='starTrader starTrader2'>A</span>
                             <span style='opacity: 0; margin-left: 110px; transform: scale(1.5);' class='starTrader starTrader3'>D</span>
                             <span style='opacity: 0; margin-left: 140px; transform: scale(1.5);' class='starTrader starTrader4'>E</span>
                             <span style='opacity: 0; margin-left: 170px; transform: scale(1.5);' class='starTrader starTrader5 starTrader6'>R</span>
                        </div>
                        <div class='startPageStartButton'>

                              <div class='scuareInSide'>
                                    <div style='height: 0px;' class='redScuareInSide'>
                                          <div class='scuare'>
                                                <span class='scuareText'>Зажмите</span>
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div>
            `
            document.body.append(mainDiv)
            this.userZajal('scale(1)',0.5,'4vmin','ease-out 2s',400,'#AAB','60px',0.7,1000,false)      //нужно было использовать деструктуризацию и параметры в объект положить...
            document.body.querySelector('.startPageflexbox').addEventListener('touchstart',()=>startPage.userZajal('scale(1.8)',1  ,'18px','linear 1s',100,'#424242','не использ','не использ','не использ',true,'115px',1 ,8))
      },
//------------------------------------------------------------------------------
      userZajal(transform,opacity,letterSpacing,transition,timeout,color,BT,Op,TO,bottomText,height,numberForSquare,ms){
            let val = 0
            previu('.starTrader'+val)
            function previu(n){
                  setTimeout(()=>{
                        let starTrader = document.body.querySelectorAll(n)
                        starTrader.forEach((item, i) => {
                              item.style.color = color;
                              item.style.margin = 0;
                              item.style.transition = transition;
                              item.style.transform = transform;
                              item.style.opacity = opacity;
                              item.style.letterSpacing = letterSpacing;
                              val++
                              if (val){previu('.starTrader' + val)}
                        });
                  }, timeout)
            }
            if (bottomText){
                  let botScuareText = document.body.querySelector('.scuareText')
                  botScuareText.classList.toggle("scuareTextFalse")
                  clearInterval(this.timerId)
                  this.timerId = setInterval(()=>{
                        this.botScuareRed().style.height = this.heightRedSquer+'px';
                        this.heightRedSquer +=  numberForSquare;
                        if(this.heightRedSquer < 0){clearInterval(this.timerId)}
                        if(this.heightRedSquer > 120){
                              clearInterval(this.timerId)
                              startPage.startPageItsOver()
                        }
                  },ms);

            }
            else if (!bottomText){
                  setTimeout(()=>{
                        let botScuare = document.body.querySelector('.startPageStartButton')
                        botScuare.style.transition = transition;
                        botScuare.style.bottom = BT;
                        botScuare.style.opacity = Op;

                        botScuare = document.body.querySelector('.startPageIco')
                        botScuare.style.transition = transition;
                        botScuare.style.marginTop = BT;
                        botScuare.style.opacity = Op;

                  },TO)


            }
      },
//------------------------------------------------------------------------------
      startPageItsOver(){
            document.body.querySelector('.startPageflexbox').onmousedown = ''
            document.body.querySelector('.startPageflexbox').onmouseup = ''
            document.body.querySelector('.startPageflexbox').style.background = '#080808'
            this.userZajal('scale(1.8)',0,'18px','ease-in 0.5s',0,'#424242','-60px',0,0,false)
            document.body.querySelector('.scuare').style.background = '#080808'
            setTimeout(()=>{
                  document.getElementById('startPageStarterID').remove()
                  document.getElementById('start').style.transition = '1s ease-out 0.3s';
                  document.getElementById('start').style.opacity = 1
                  document.querySelector('header').style.opacity = 1
            },1000)
      },
//------------------------------------------------------------------------------
}

startPage.starterPage()

try {
      mainPage.start()
} catch (err) {
      setTimeout(()=>mainPage.start(),200)
}



//let qwe = {height: botScuareRed().style.height}                               //в процессе решения я даже сам не понял, что решил проблемму другим способом xDD
//qwe.watch(height, alert())                                                    //оставлю это)
//setInterval(()=>alert(botScuareRed().style.height),2000)
//botScuareRed().watch('height', alert())
