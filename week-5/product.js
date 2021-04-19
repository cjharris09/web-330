/*--
============================================
; Title: Assignment 5.2
; Author: Chris Harris
; Date: 18 April 2021
; Description: class product file.
;===========================================
*/

export class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
    
}