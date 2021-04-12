/*
============================================
; Title: Assignment 4.2
; Author: Chris Harris
; Date: 11 April 2021
; Description: calorie-converter.js file.
;===========================================
*/
// imports the FoodModel function from the food-model.js file
import { FoodModel } from './food-model.js';
//Creates the calorie converted class that hold the array where the elements are held
export class CalorieConverter { 
    static data = [
        new FoodModel (1007, 'Egg', 78),
        new FoodModel (1008, 'Apple', 95),
        new FoodModel (1009, 'Hamburger', 354),
        new FoodModel (1010, 'Fries', 400),
        new FoodModel (1011, 'Banana', 105),
        new FoodModel (1012, 'Soda', 150),
    ];

    static find(searchString){
        return this.data.filter(foodModel => foodModel.name.toLowerCase() == searchString.toLowerCase());
    }
    
}