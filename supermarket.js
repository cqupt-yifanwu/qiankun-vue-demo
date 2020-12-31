class SuperMarket {
    constructor () {
        this.goodsMap = {
        }

        this.promotionList = ['apple', 'watermelon', 'television']

        this.goodList = []

        this.integral = 0;

        this.totalPrice = 0;

        this.init();
    }

    init() {
        this.goodsMap = {
            apple: 10,
            watermelon: 30,
            washingLiquid: 20,
            television: 800,
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
        this.totalPrice += this.goodsMap[good]
    }

    // 促销商品分数计算
    promotionCountCalculate (price) {
        // 已经大于1000
        if (this.totalPrice > 1000) {
            this.integral = 2000 + this.integral + price - 1000
            return
        }

        this.integral = price * 2
    }

    // 普通商品分数计算
    normalCountCalculate (price) {
        // 已经大于1000
        if (this.totalPrice > 1000) {
            this.integral = 1000 + Math.floor((price - 1000) / 20)
            return
        }

        this.integral += price
    }

    // 将促销商品前置
    promotionFirst() {
        this.goodList.sort((item) => {
            return this.promotionList.indexOf(item)
        })
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

superMarket.addGood('television')

console.log('test')
superMarket.calculateIntegral()
