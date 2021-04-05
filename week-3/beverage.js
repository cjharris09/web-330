/*
============================================
; Title: Assignment 3.2
; Author: Chris Harris
; Date: 4 April 2021
; Description: Week 3 beverage.js file.
; 
;===========================================
*/
// import the Product from the product.js file
import { Product } from "./product.js";
// create the beverage class
export class Beverage extends Product
{
    constructor(name, price){
        super(name, price)
    }
}