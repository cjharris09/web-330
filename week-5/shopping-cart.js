export class ShoppingCart {
    constructor(_products){
        this._products = [];
    }
    count(){
        console.log(`there is ${this._products}`)
        return this._products.length;
    }
    add(products){
        this._products.push(products);
    }

    * iterator(){
        for(let i of this._products)
        yield i;
    
    }
    
}

