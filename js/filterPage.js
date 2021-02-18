let filterPage = {
//------------------------------------------------------------------------------
      sellPrice: Infinity,
      sellLoc: '',
      sellItem: '',

      buyPrice: 0,
      buyLoc: '',
      buyItem: '',

      profit: [],

      items: itemTrade,
      locatesTradeBuy: universe,
      locatesTradeSell: universe,
//------------------------------------------------------------------------------
      start(){
            start.renderPageName('Фильтр товаров')
            let div = document.getElementById('content')
            div.innerHTML = `
                  <form class='filterPage_formFilter'>
                        <div class='filterPage_filter'>
                        <p>Локация покупки товара</p>
                              <select class='filterPage_formInput'>
                                    <option>Пункт 1</option>
                              </select>
                        </div>

                        <div class='filterPage_filter'>
                        <p>Локация продажи товара</p>
                              <select class='filterPage_formInput'>
                                    <option>Пункт 1</option>
                              </select>
                        </div>

                        <div class='filterPage_filter'>
                        <p>Товар</p>
                              <select class='filterPage_formInput'>
                                    <option>Пункт 1</option>
                              </select>
                        </div>

                        <div class='filterPage_filter'>
                        <p>Свободное CSU</p>
                              <input class='filterPage_formInput'></input>
                        </div>

                        <div class='filterPage_filter'>
                        <p>Количество денег</p>
                              <input class='filterPage_formInput'></input>
                        </div>

                        <div class='filterPage_filter'>
                              <select class='filterPage_formInput'>
                                    <option>сортировка</option>
                              </select>
                        </div>

                        <div class='filterPage_filter' поехали>
                              <button class='filterPage_formInput'>Поехали
                              </button>
                        </div>
                  </form>
            `
            //this.toBeginFilter()
      },
//------------------------------------------------------------------------------
      toBeginFilter(){                                                          //в контексте "станция покупает\Станция продает"
            for (item in this.items){
                  this.getBestPrice(this.items[item],this.locatesTradeSell,'sell')
                  this.sellPrice = Infinity
                  this.buyPrice = 0
            }


            this.profit.forEach((item, i) => {console.log(item)})
      },
//------------------------------------------------------------------------------
      getBestPrice(item,loc,sellOrBuy){
            for (locat in loc){
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
                                          priseBuy: this.buyPrice,
                                          locatSell: this.sellLoc,
                                          priseSell: this.sellPrice,
                                          profit: this.buyPrice-this.sellPrice,
                                    })
                              }
                        }
                  }
                  catch (e) {
                        console.log(e);
                  }
            }
      }
//------------------------------------------------------------------------------
}
