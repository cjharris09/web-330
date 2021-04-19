 /*--
============================================
; Title: Assignment 5.2
; Author: Chris Harris
; Date: 18 April 2021
; Description: class ShoppingCart file.
;===========================================
*/

export class ShoppingCart {
    constructor(_products){
        this._products = [];
    }
    //count function that counts the number in the products array
    count(){
        return this._products.length;
    }
    //add function that adds the selection to the products array
    add(products){
        this._products.push(products);
    }
    // iterator function that will yield the results of the product array
    * iterator(){
        for(let i of this._products)
        yield i;
    
    }
    
}

