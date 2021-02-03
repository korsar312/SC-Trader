{
/////====================================================


starterPage()
let botScuareRed = document.body.querySelector('.redScuareInSide')
//let qwe = {height: botScuareRed.style.height}                         //в процессе решения я даже сам не понял, что решил проблемму другим способом xDD
//qwe.watch(height, alert())
//setInterval(()=>alert(botScuareRed.style.height),2000)

//botScuareRed.watch('height', alert())


let timerId
let heightRedSquer = 0

function starterPage(){                      //чтоб багов с кликами не было можно это всё прописать в css, а тут только класс менять, но там нужно на каждую букву свой класс со всоим transition, так что пусть пока так будет
      let mainDiv = document.createElement('div')
      mainDiv.className = `startPageStarter`
      mainDiv.id = `startPageStarterID`
      mainDiv.innerHTML = `
            <div onmousedown="userZajal('scale(1.8)',1  ,'18px','linear 1.5s',100,'#424242',true,'115px',1 ,13)"
                   onmouseup="userZajal('scale(1)'  ,0.5,'35px','ease-out 1s',100,'#AAB'   ,true,'0px'  ,-1,10)" class='startPageflexbox'>
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
      userZajal('scale(1)',0.5,'35px','ease-out 2s',400,false)
}

function userZajal(transform,opacity,letterSpacing,transition,timeout,color,bottomText,height,numberForSquare,ms){
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
            clearInterval(timerId)
            timerId = setInterval(()=>{
                  botScuareRed.style.height = heightRedSquer+'px';
                  heightRedSquer +=  numberForSquare;
                  if(heightRedSquer < 0){clearInterval(timerId)}
                  if(heightRedSquer > 120){
                        clearInterval(timerId)
                        removeDOM(true, 'startPageStarterID')
                  }
            },ms);

      }
      else if (!bottomText){
            setTimeout(()=>{
                  let botScuare = document.body.querySelector('.startPageStartButton')
                  botScuare.style.bottom = '50px';
                  botScuare.style.opacity = 1;
                  
                  botScuare = document.body.querySelector('.startPageIco')
                  botScuare.style.marginTop = '10vh';
                  botScuare.style.opacity = 1;
            },1000)


      }
}

/////====================================================
}
