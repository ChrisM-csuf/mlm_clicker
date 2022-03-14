window.addEventListener('load',function() {


    let money2 = new money;  
    const pyraButton = document.querySelector("#pyramid_button");
    pyraButton.addEventListener("click", function(e) {
        money2.moneyHandler()
    });

    const hunsprice = document.getElementById("huns_price");
    const hunsQuantity = document.getElementById("huns_qty");
    let huns = new shop_item(hunsprice, hunsQuantity);

    const hunsButton = document.getElementById("buy_huns");
    hunsButton.addEventListener("click", function(e) {
        huns.buyItem(money2)
    });
})



function employeeHandler(){
    var employees
}

class money{
    constructor(){
        this.total = 0;
        this.moneyCounter = document.getElementById("money")
    }

    moneyHandler(){
        this.total = this.total + 1;
        if(this.moneyCounter){
            this.moneyCounter.innerHTML = this.total;
        }
    }
    getMoney(){
        return this.total;
    }
    setMoney(newmoney){
        this.total = newmoney;
        if(this.moneyCounter){
            this.moneyCounter.innerHTML = this.total;
        }
    }
}

class shop_item{
    constructor(priceElement, quantityElement) {
        this.price = 1;
        this.quantity = 0;
        this.priceElement = priceElement;
        this.quantityElement = quantityElement;
    }
    buyItem(money) {

        var cash = money.getMoney()
        if(cash<this.price){
            return;
        }

        var newmoney = cash - this.price;
        money.setMoney(newmoney);
        
        this.quantity = this.quantity + 1
        this.price = Math.ceil(this.price * 1.2)

        

        if(this.priceElement) {
            this.priceElement.innerHTML = this.price;
        }
        if(this.quantityElement) {
            this.quantityElement.innerHTML = this.quantity;
        }
    }
}