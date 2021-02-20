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
            this.formData(universe, 'filtTrade')
            this.formData(itemTrade, 'item')
            div.innerHTML = `
                  <div class='filterPage_but' поехали>
                        <button onclick='filterPage.toBeginFilter()' type="button" class='filterPage_formInput'>Поехали
                        </button>
                  </div>
                  <form class='filterPage_formFilter'>
                        <div class='filterPage_filter'>
                        <p>Покупка товара на:</p>
                              <select multiple="multiple" size='7' class='filterPage_formInput filterPage_Sell'>
                                    ${this.filtTrade}
                              </select>
                        </div>

                        <div class='filterPage_filter'>
                        <p>Продажа товара на:</p>
                              <select multiple="multiple" size='7' class='filterPage_formInput filterPage_Buy'>
                                    ${this.filtTrade}
                              </select>
                        </div>

                        <div class='filterPage_filter'>
                        <p>Товар</p>
                              <select multiple="multiple" size='7' class='filterPage_formInput filterPage_Item'>
                                    ${this.item}
                              </select>
                        </div>

                        <div class='filterPage_filter'>
                        <p>Свободное CSU</p>
                              <input type="number" value='100' class='filterPage_formInput filterPage_scu'></input>
                        </div>

                  </form>
            `

      },
//------------------------------------------------------------------------------
      toBeginFilter(){                                                          //в контексте "станция покупает\Станция продает"
            if(!document.body.querySelector('.filterPage_scu').value || document.body.querySelector('.filterPage_scu').value <= 0 ){
                  alert('введите значение денег и SCU больше 0')
                  return
            }
            if (document.querySelector('.List')){
                  let k = document.querySelector('.List')
                  k.remove()
            }
            this.getformData('.filterPage_Sell',universe,'locatesTradeSell')
            this.getformData('.filterPage_Buy',universe,'locatesTradeBuy')
            this.getformData('.filterPage_Item',itemTrade,'items')
            this.scu = document.body.querySelector('.filterPage_scu').value

            for (item in this.items){
                  this.getBestPrice(this.items[item],this.locatesTradeSell,'sell')
                  this.sellPrice = Infinity
                  this.buyPrice = 0
            }

            let renderProfitList = document.createElement('div')
            renderProfitList.className = 'List'

            let listProfit = '<div>'

            this.profit.sort((a,b)=>b.profit - a.profit)

            this.profit.forEach((item, i) => {
                  listProfit += `<div class='filterPage_ProfitList'><span>Наименование товара: ${item.item}</span></div><div><div><span>Локация покупки: ${item.locatSell.name}</span></div><div><span>Цена покупки: ${item.priseSell}</span></div><span>Локация продажи: ${item.locatBuy.name}</span></div><div><span>Цена продажи: ${item.priseBuy}</span></div><div><span>Профит: ${item.profit}</span></div>`
            })

            listProfit += '</div>'

            renderProfitList.innerHTML = listProfit
            document.getElementById('content').append(renderProfitList)
            this.profit = []
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
                                    this.profit.push({
                                          item: item.name,
                                          locatBuy: this.buyLoc,
                                          priseBuy: (this.buyPrice*100)*this.scu,
                                          locatSell: this.sellLoc,
                                          priseSell: (this.sellPrice*100)*this.scu,
                                          profit: Math.round(((this.buyPrice-this.sellPrice)*100)*this.scu),
                                    })
                              }
                        }
                  }
                  catch (e) {
                  }
            }
      },
//------------------------------------------------------------------------------
      formData(elem, n){
            for(i in elem){
                  this[n] += `<option data-name='${i}'>${elem[i].name}</option>`
            }
      },
//------------------------------------------------------------------------------
      getformData(elem, n, vari){
            let j = document.body.querySelector(elem)
            let tempArr = []
            let tempLoc = []

            for(let z=0; z<j.options.length; z++){
                  if(j.options[z].selected){
                        tempArr.push(n[j.options[z].getAttribute('data-name')])
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
}
