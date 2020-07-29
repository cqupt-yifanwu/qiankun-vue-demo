class SuperMarket {
    constructor () {
        this.goodsMap = {
        }

        this.goodList = []

        this.init();
    }

    init() {
        this.goodsMap = {
            apple: 10,
            watermelon: 30,
            washingLiquid: 20,
            television: 1000,
            refrigerator: 2000
        }
    }

    addGood (good) {
        if (!this.goodsMap[good]) {
            console.log(`不好意思，该超市暂时没${good}，敬请期待吧`)
            return
        }

        this.goodList.push(good)
    }
    
    calculateIntegral () {
        let integral = 0
        this.goodList.map(item => {
            integral += this.goodsMap[item]
        })
        console.log(`您本次购买得到${integral}积分`)
        return integral
    }
}


//  调用
const superMarket = new SuperMarket()

superMarket.addGood('apple')
superMarket.addGood('watermelon')

superMarket.calculateIntegral()
