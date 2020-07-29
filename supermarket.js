class SuperMarket {
    constructor () {
        this.goodsMap = {
        }

        this.promotionList = ['apple', 'watermelon']

        this.goodList = []

        this.integral = 0;

        this.init();
    }

    init() {
        this.goodsMap = {
            apple: 10,
            watermelon: 30,
            washingLiquid: 20,
            television: 1000,
            refrigerator: 2350
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

    // 促销商品分数计算
    promotionCountCalculate (price) {

    }

    // 普通商品分数计算
    normalCountCalculate (price) {
        // 已经大于1000
        if (this.integral > 1000) {
            this.integral += Math.floor(price / 20)
            return
        }

        if (this.integral + price > 1000) {
            this.integral = 1000 + Math.floor((this.integral + price - 1000) / 20)
            return
        }

        this.integral += price
    }
    
    // 计算积分
    calculateIntegral () {
        this.goodList.map(item => {
            if (this.promotionList.indexOf(item) > -1) {
                this.promotionCountCalculate(this.goodsMap[item])
            } else {
                this.normalCountCalculate(this.goodsMap[item])
            }
            
        })
        console.log(`您本次购买得到${this.integral}积分`)
        return this.integral
    }
}


//  调用
const superMarket = new SuperMarket()

superMarket.addGood('refrigerator')


superMarket.calculateIntegral()
