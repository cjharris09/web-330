/*
============================================
; Title: Assignment 3.2
; Author: Chris Harris
; Date: 4 April 2021
; Description: Week 3 main-course.js file.
; 
;===========================================
*/
// import the Product from the product.js file
import { Product } from "./product.js";
// create the MainCourse class
export class MainCourse extends Product 
{
    constructor(name, price){
        super(name, price)
    }
}