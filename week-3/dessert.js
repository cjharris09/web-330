/*
============================================
; Title: Assignment 3.2
; Author: Chris Harris
; Date: 4 April 2021
; Description: Week 3 dessert.js file.
; 
;===========================================
*/
// import the Product from the product.js file
import { Product } from "./product.js";
// create the Dessert class and export it
export class Dessert extends Product
{
    constructor(name, price){
        super(name, price)
    }
}