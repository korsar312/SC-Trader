let tradeTablePage = {                                                          //когда я делал эту страницу, я не спал 2 дня... и пожалуй пусть так и останется так как работает
//------------------------------------------------------------------------------
      start(e){                                                                 //создать таблицу товаров
            start.renderPageName('Таблица товаров')
            let mapName = new Map()
            let div = document.getElementById('content')
            let table = document.createElement('table')
            table.className = 'tablePrice'

            for (let spaceObject in universe){
                  if(!universe[spaceObject].parrent){
                        searchСhild(universe[spaceObject])
                        function searchСhild(n){
                              if(n.child){
                                    for(a in n.child){
                                          searchСhild(universe[n.child[a]])
                                    }
                              }
                              else{
                                    let arrName = []

                                    for(let item in itemTrade){

                                          function searchItemInSpaceObject(trade){
                                                for(itemArr in n[trade]){
                                                      if (itemTrade[item].name == n[trade][itemArr][0]){
                                                            return n[trade][itemArr][1]
                                                      }
                                                }
                                                return '-'
                                          }
                                          let priceBuy = searchItemInSpaceObject('buy')
                                          let priceSell = searchItemInSpaceObject('sell')
                                          let priceItem = itemTrade[item].name
                                          let price = [priceBuy,priceSell,priceItem]
                                          arrName.push(price)
                                    }
                                    mapName.set(n, arrName)
                              }
                        }
                  }
            };

            {
                  let swit = 0
                  let iterat = ''
                  let buySell = ''
                  for(i in itemTrade){
                        iterat += `<th colspan='2' data-goriz='${swit}' class='goriz${swit}' data-Item='${itemTrade[i]}'>${itemTrade[i].name}</th>`
                        buySell += `<th data-goriz='${swit}' class='goriz${swit}' data-Item='${itemTrade[i]}'>Покупка</th><th data-goriz='${swit}' class='goriz${swit}' data-Item='${itemTrade[i]}'>Продажа</th>`
                        swit++
                  }
                  table.innerHTML = `<tr><th rowspan='2'>Локация</th>${iterat} <tr>${buySell}</tr><tr>`
            }

            let vert = 0
            for(key of mapName.keys()){                                         //нужно с этим что-то сделать. Оно грузит очень долго
                  let swit = 0
                  let arr = mapName.get(key)
                  let iterat = ''
                  for(a in arr){
                        iterat += `<td data-locat='${key.name}' data-item='${arr[a][2]}' data-trade='buy' data-vertik='${vert}' data-goriz='${swit}' class='vertik${vert} goriz${swit}' onclick='tradeTablePage.changeValue(this)' style='cursor: pointer'>${arr[a][0]}</td>`
                        iterat += `<td data-locat='${key.name}' data-item='${arr[a][2]}' data-trade='sell' data-vertik='${vert}' data-goriz='${swit}' class='vertik${vert} goriz${swit}' onclick='tradeTablePage.changeValue(this)' style='cursor: pointer'>${arr[a][1]}</td>`
                        swit++
                  }


                  table.innerHTML += `<tr><td data-vertik='${vert}' class='vertik${vert} data-locat='${key}' data-no='no'>${key.name}</td> ${iterat} </tr>`
                  vert++
            }




            let currentElem = null;                                             //для выделения цветом вертикали и горизонтали
            table.onmouseover = function(event) {
              if (currentElem) return;
              let target = event.target.closest('td');
              if (!target || target.getAttribute("data-no")) return;
              if (!table.contains(target)) return;
              currentElem = target;

              let elements = document.getElementsByClassName(`vertik${target.getAttribute('data-vertik')}`);
              for (let elem of elements) {
                   elem.style.background = 'pink';
              }
              elements = document.getElementsByClassName(`goriz${target.getAttribute('data-goriz')}`);
              for (let elem of elements) {
                   elem.style.background = 'pink';
              }
            };

            table.onmouseout = function(event) {
              if (!currentElem) return;
              let relatedTarget = event.relatedTarget;
              while (relatedTarget) {
                if (relatedTarget == currentElem) return;
                relatedTarget = relatedTarget.parentNode;
              }

              let elements = document.getElementsByClassName(`vertik${currentElem.getAttribute('data-vertik')}`);
              for (let elem of elements) {
                   elem.style.background = '';

              }
              elements = document.getElementsByClassName(`goriz${currentElem.getAttribute('data-goriz')}`);
              for (let elem of elements) {
                   elem.style.background = '';
                   currentElem = null;
            }

            };


            div.append(table)
      },
//------------------------------------------------------------------------------
      changeValue(n){                                                           //вызывает окно для изменения значения
            let locat = n.getAttribute('data-locat')
            let item = n.getAttribute('data-item')
            let trade = n.getAttribute('data-trade')

            let emptyModal = document.createElement('div')
            emptyModal.id = 'emptyModal'
            emptyModal.style.opacity = '0'
            emptyModal.onclick = function(){return start.removeDOM(true,'emptyModal','modalChangePrice')}
            app.append(emptyModal)
            setTimeout(() => {emptyModal.style.opacity = '0.8'}, 0);

            let modalChangePrice = document.createElement('div')
            modalChangePrice.id = 'modalChangePrice'
            modalChangePrice.style.opacity = '0'
            modalChangePrice.innerHTML = `<p style="text-align: center;">Ввести значения</p> <input id="changeInput">${n.innerText}</input> <button data-locat='${locat}' data-item='${item}' data-trade='${trade}' onclick='tradeTablePage.funcChangeValue(this)'>Ввести</button>`
            modalChangePrice.style.top = event.clientY + 'px'
            modalChangePrice.style.left = event.clientX + 'px'

            app.append(modalChangePrice)
            setTimeout(() => {modalChangePrice.style.opacity = '1'}, 0);
      },
//------------------------------------------------------------------------------
      funcChangeValue(n){
            let locat = n.getAttribute('data-locat')
            let item = n.getAttribute('data-item')
            let trade = n.getAttribute('data-trade')
            let tempNumb = document.getElementById('changeInput')

            for (i in universe){
                  if(universe[i].name == locat){
                        locat = universe[i]
                        break
                  }
            }


            if (locat[trade]){
                  let okey = true
                  for(let i in locat[trade]){
                        if(locat[trade][i][0] == item){
                              locat[trade][i][1] = tempNumb.value

                              okey = false

                              start.removeDOM(false, 'content')
                              this.start('content')
                              start.setTableServer(universe, 'http://127.0.0.1:3002')
                              start.removeDOM(true,'emptyModal','modalChangePrice')

                              break
                        }
                  }
                  if (okey){

                        locat[trade].push([])
                        locat[trade][locat[trade].length-1].push(item)
                        locat[trade][locat[trade].length-1].push(+tempNumb.value)

                        start.removeDOM(false, 'content')
                        this.start('content')
                        start.setTableServer(universe, 'http://127.0.0.1:3002')
                        start.removeDOM(true,'emptyModal','modalChangePrice')
                  }
            }
            else {
                  locat[trade] = []
                  locat[trade].push([])
                  locat[trade][locat[trade].length-1].push(item)
                  locat[trade][locat[trade].length-1].push(+tempNumb.value)

                  start.removeDOM(false, 'content')
                  this.start('content')
                  start.setTableServer(universe, 'http://127.0.0.1:3002')
                  start.removeDOM(true,'emptyModal','modalChangePrice')
            }
      },                                                    //само изменене значения
//------------------------------------------------------------------------------
}
