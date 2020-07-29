class SuperMarket {
    constructor () {
        this.goodsMap = {
        }

        this.promotionList = ['apple', 'watermelon']

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

    // 增加促销商品 fixme：应该给相应用户权限开发该方法 @jiaoguibin
    addPromotionGood (good) {
        if (this.promotionList.indexOf(good) > -1) {
            console.log('您添加的商品已经是促销商品')
            return
        }

        if (!this.goodsMap[good]) {
            console.log(`不好意思，该超市暂时没${good}，敬请期待吧`)
            return
        }

        this.promotionList.push(good)
    }

    // 移出促销商品 fixme：应该给相应用户权限开发该方法 @jiaoguibin
    removePromtionGood (good) {
        if (this.promotionList.indexOf(good) === -1) {
            console.log('该商品已经不是促销商品，请核实')
            return
        }

        const index = this.promotionList.indexOf(good)
        
        // 移出
        this.promotionList.splice(index, 1)
    }

    // 购买商品
    addGood (good) {
        if (!this.goodsMap[good]) {
            console.log(`不好意思，该超市暂时没${good}，敬请期待吧`)
            return
        }

        this.goodList.push(good)
    }
    
    // 计算积分
    calculateIntegral () {
        let integral = 0
        this.goodList.map(item => {
            if (this.promotionList.indexOf(item) > -1) {
                integral += this.goodsMap[item] * 2
            } else {
                integral += this.goodsMap[item]
            }
            
        })
        console.log(`您本次购买得到${integral}积分`)
        return integral
    }
}


//  调用
const superMarket = new SuperMarket()

superMarket.addGood('apple')
superMarket.addGood('watermelon')
superMarket.addGood('washingLiquid')

superMarket.calculateIntegral()
