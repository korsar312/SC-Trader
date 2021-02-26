let filterPage = {
//------------------------------------------------------------------------------
      filtTrade: '',
      item: '',

      sellPrice: Infinity,
      sellLoc: '',
      sellItem: '',

      buyPrice: 0,
      buyLoc: '',
      buyItem: '',

      profit: [],

      money: 1,
      scu: 1,
      items: itemTrade,
      locatesTradeBuy: universe,
      locatesTradeSell: universe,
//------------------------------------------------------------------------------
      start(){
            start.renderPageName('Фильтр товаров')
            let div = document.getElementById('content')
            div.innerHTML = `
                  <div class='filterPage_but' поехали>
                        <button onclick='filterPage.toBeginFilter()' type="button" class='filterPage_formInput'>Поехали
                        </button>
                  </div>

                  <div class='filterPage_workspaces'>
                        <form class='filterPage_formFilter'>Фильтр
                              <div class='contextMenu_buttonBuy contextMenu_button'>
                                    <div  class='contextMenu_nameButton' onclick='this.nextElementSibling.classList.toggle("contextMenu_buttonItsOpen")'>Покупка товара на: </div>
                                    ${filterPage.innerContextMenu(universe)}
                              </div>

                              <div class='contextMenu_buttonSell contextMenu_button'>
                                    <div class='contextMenu_nameButton' onclick='this.nextElementSibling.classList.toggle("contextMenu_buttonItsOpen")'>Продажа товара на: </div>
                                    ${filterPage.innerContextMenu(universe)}
                              </div>

                              <div class='contextMenu_buttonItem contextMenu_button'>
                                    <div class='contextMenu_nameButton' onclick='this.nextElementSibling.classList.toggle("contextMenu_buttonItsOpen")'>Товар: </div>
                                    ${filterPage.innerContextMenu(itemTrade)}
                              </div>

                              <div class='contextMenu_buttonSCU contextMenu_button'>
                                    <div class='contextMenu_buttonSCUName'> Свободное CSU</div>
                                    <input type="number" value='100' class='filterPage_scu'></input>
                              </div>
                        </form>
                        <div class='filterPage_ProfitFilter'>Прибыль
                        </div>
                        <div class='filterPage_DetailFilter'>Детали
                        </div>
                  </div>
            `

      },
//------------------------------------------------------------------------------
      toBeginFilter(){                                                          //в контексте "станция покупает\Станция продает"
            if(!document.body.querySelector('.filterPage_scu').value || document.body.querySelector('.filterPage_scu').value <= 0 ){
                  alert('введите значение денег и SCU больше 0')
                  return
            }

            this.profit = []

            if (document.querySelector('.List')){
                  let k = document.querySelector('.List')
                  k.remove()

                  if (document.querySelector('.filterPage_Detail')){
                        k = document.querySelector('.filterPage_Detail')
                        k.remove()
                  }
            }
            this.getformData('.contextMenu_buttonBuy',universe,'locatesTradeSell')
            this.getformData('.contextMenu_buttonSell',universe,'locatesTradeBuy')
            this.getformData('.contextMenu_buttonItem',itemTrade,'items')
            this.scu = document.body.querySelector('.filterPage_scu').value

            for (item in this.items){
                  this.getBestPrice(this.items[item],this.locatesTradeSell,'sell')
                  this.sellPrice = Infinity
                  this.buyPrice = 0
            }

            let renderProfitList = document.createElement('div')
            renderProfitList.className = 'List'

            let listProfit = ''

            this.profit.sort((a,b)=>b.profit - a.profit)

            this.profit.forEach((item, i) => {
                  listProfit += `<div onclick='filterPage.getDetailForProfit(${i})' class='filterPage_ProfitList'>${item.profit}</div>`
            })

            renderProfitList.innerHTML = listProfit
            document.querySelector('.filterPage_ProfitFilter').append(renderProfitList)
      },
//------------------------------------------------------------------------------
      getBestPrice(item,loc,sellOrBuy){
            for (let locat in loc){
                  try {
                        if(loc[locat][sellOrBuy].flat().indexOf(item.name) !== -1){
                              let optimPrice = loc[locat][sellOrBuy].flat()[loc[locat][sellOrBuy].flat().indexOf(item.name) + 1]
                              if(sellOrBuy === 'sell'){
                                    this.sellPrice = optimPrice;
                                    this.sellLoc = loc[locat]
                                    this.getBestPrice(item,this.locatesTradeBuy,'buy')
                              }
                              else{
                                    this.buyPrice = optimPrice;
                                    this.buyLoc = loc[locat]
                                    this.buyPrice-this.sellPrice <= 0 ? '' : this.profit.push({
                                          item: item,
                                          locatBuy: this.buyLoc,
                                          priseBuy: ((this.buyPrice*100)*this.scu).toFixed(2),
                                          locatSell: this.sellLoc,
                                          priseSell: ((this.sellPrice*100)*this.scu).toFixed(2),
                                          profit: (((this.buyPrice-this.sellPrice)*100)*this.scu).toFixed(2),
                                    })
                              }
                        }
                  }
                  catch (e) {
                  }
            }
      },
//------------------------------------------------------------------------------
      getformData(elem, n, vari){
            let j = document.body.querySelector(elem).querySelectorAll('.contextMenu_choice')
            let tempArr = []
            let tempLoc = []

            for(let z=0; z<j.length; z++){
                  if(j[z].checked){
                        tempArr.push(n[j[z].getAttribute('name')])
                  }
            }

            if(tempArr.length>0){
                  for (locat in tempArr){
                        rev(tempArr[locat])
                        function rev(locRever){
                              if(locRever.child){
                                    for(localchild in locRever.child){
                                          rev(n[locRever.child[localchild]])
                                    }
                              }
                              else if(!tempLoc.includes(locRever)) {
                                    tempLoc.push(locRever)
                              }
                        }
                  }
            }
            else{
                  for (locat in n){
                        rev(n[locat])
                        function rev(locRever){
                              if(locRever.child){
                                    for(localchild in locRever.child){
                                          rev(n[locRever.child[localchild]])
                                    }
                              }
                              else if(!tempLoc.includes(locRever)) {
                                    tempLoc.push(locRever)
                              }
                        }
                  }
            }
            this[vari] = tempLoc
      },
//------------------------------------------------------------------------------
      innerContextMenu(arg){
      	let parrentArr = []

      	for(i in arg){arg[i].parrent ? '' : parrentArr.push(arg[i])}

      	let context =`<div class='contextMenu_innerContext'>`
      	let iterat = -10
      	let set = new Set()

      	parrentArr.forEach(i=>{
      		revers(i)
      		function revers(elem){
      			if(elem.child){
      				elem.child.forEach(b=>{
      					iterat += 10
      					if(!set.has(elem.name)){
      						context += `
      							<div>
      								<input class='contextMenu_choice' type='checkbox' style='margin-left: ${iterat}px' name='${elem.id}'>
      								<label for='${elem.id}'>
      									${elem.name}
      								</label>
      							</div>
      						`
      						}
      					set.add(elem.name)
      					revers(arg[b])
      					iterat -= 10
      				})
      			}
      			else{
      				iterat += 10
      				context += `
            				<div>
            					<input class='contextMenu_choice' type='checkbox' style='margin-left: ${iterat}px' name='${elem.id}'>
            					<label for='${elem.id}'>
            						${elem.name}
            					</label>
            				</div>
      				`
      				iterat -= 10
      			}
      		}
      	})
            context += `</div>`
      	return context
      },
//------------------------------------------------------------------------------
      getDetailForProfit(i){
            if (document.querySelector('.filterPage_Detail')){
                  let k = document.querySelector('.filterPage_Detail')
                  k.remove()
            }
            let j = document.body.querySelector('.filterPage_DetailFilter')
            let obj = this.profit[i]
            let content = `
                  <div class='filterPage_DetailItem filterPage_DetailList'>
                        <div>Товар:</div>
                        <div>${obj.item.name}</div>
                  </div>

                  <div>
                        <div class='filterPage_DetailLocBuy filterPage_DetailList'>
                              <div>Место покупки:</div>
                              <div>${obj.locatBuy.name}</div>
                        </div>

                        <div class='filterPage_DetailBuyPrice filterPage_DetailList'>
                              <div>Цена покупки:</div>
                              <div>${obj.priseBuy}</div>
                        </div>
                  </div>

                  <div>
                        <div class='filterPage_DetailLocSell filterPage_DetailList'>
                              <div>Место продажи:</div>
                              <div>${obj.locatSell.name}</div>
                        </div>

                        <div class='filterPage_DetailSellPrice filterPage_DetailList'>
                              <div>Цена продажи:</div>
                              <div>${obj.priseSell}</div>
                        </div>
                  </div>

                  <div class='filterPage_DetailProfit'>
                        <div>Прибыль:</div>
                        <div>${obj.profit}</div>
                  </div>
            `
            let renderDetaleList = document.createElement('div')
            renderDetaleList.className = 'filterPage_Detail'
            renderDetaleList.innerHTML = content
            j.append(renderDetaleList)
      }
//------------------------------------------------------------------------------
}
