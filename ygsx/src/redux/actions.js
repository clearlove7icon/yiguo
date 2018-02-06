import store from './store'
import change_cars from './ActionCreators/change_cars'

const actions = {
    //在详情页添加商品
    isBuy: true,
    addGood({CommodityCode, CommodityPrice, CommodityName,Pictures,OriginalPrice, SmallPic}){
        let cars = store.getState().cars.map(good => good)
        let isHas = cars.some(good => {
            if (good.CommodityCode === CommodityCode){ 
                //获取详情页初始商品数量，点击添加购物车增加相应数量
                good.num+=store.getState().num
                return true
            }else {
                return false
            }
        })
        //判断商品是否存在，不存在就添加
        if (!isHas) {
            cars.push({
                CommodityCode, CommodityPrice, CommodityName, num: store.getState().num, Pictures: Pictures?Pictures[0]:SmallPic, OriginalPrice, isBuy: store.getState().isBuy
            })
        }
        localStorage.cars = JSON.stringify(cars)
        store.dispatch(change_cars(cars))
    },
    //在购物车点击减号减少商品
    reduceGood({CommodityCode}){
		setTimeout(function(){
			let cars = store.getState().cars.map(good=>good)
			for (var i =0;i<cars.length;i++) {
				if(cars[i].CommodityCode===CommodityCode){
                    cars[i].num--;
                    //当商品数量为0时，删除商品
					if(cars[i].num<=0){
						cars.splice(i,1)
					}				
					break;
				}
			}
			localStorage.cars = JSON.stringify(cars)
			store.dispatch(change_cars(cars))
		},500)
    },
    //在购物车点击加号添加商品
    setGood({CommodityCode}) {
        setTimeout(function(){
			let cars = store.getState().cars.map(good=>good)
			for (var i =0;i<cars.length;i++) {
				if(cars[i].CommodityCode===CommodityCode){
					cars[i].num++;			
					break;
				}
			}
			localStorage.cars = JSON.stringify(cars)
			store.dispatch(change_cars(cars))
		},500)
    },
    //删除
    clearCar({CommodityCode}) {
        setTimeout(function(){
			let cars = store.getState().cars.map(good=>good)
			for (var i =0;i<cars.length;i++) {
				if(cars[i].CommodityCode===CommodityCode){
					cars.splice(i,1)		
					break;
				}
			}
			localStorage.cars = JSON.stringify(cars)
			store.dispatch(change_cars(cars))
		},500)
    },
    //更改单个商品isBuy
    changeBuy({CommodityCode}) {
        let cars = store.getState().cars.map(good=>good)
        for (var i =0;i<cars.length;i++) {
            if(cars[i].CommodityCode===CommodityCode){
                cars[i].isBuy=!cars[i].isBuy;	
                break;
            }
        }
        localStorage.cars = JSON.stringify(cars)
        store.dispatch(change_cars(cars))
    },
    //更改所有商品的isBuy
    changeAllBuy() {
        let cars = store.getState().cars.map(good=>good)
        for (var i =0;i<cars.length;i++) {
            cars[i].isBuy=!cars[i].isBuy;
        }
        localStorage.cars = JSON.stringify(cars)
        store.dispatch(change_cars(cars))
    },
    //当用户登录之后获取购物车数据
    initCars() {
        setTimeout(function() {
            let cars = localStorage.cars?JSON.parse(localStorage.cars):[]
            store.dispatch(change_cars(cars))
        },500)
    }
}

export default actions