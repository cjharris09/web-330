/*
============================================
; Title: Assignment 3.2
; Author: Chris Harris
; Date: 4 April 2021
; Description: Week 3 bill.js file.
; 
;===========================================
*/
// create the Bill class and export it
export class Bill {
    constructor(_beverages, _appetizers, _mainCourses, _desserts){
        this._beverages=[];
        this._appetizers=[];
        this._mainCourses=[];
        this._desserts=[];
    }

// function for adding a beverage 
addBeverage(beverage)
{
    this._beverages.push(beverage);
}
// function for adding an appetizer
addAppetizer(appetizer)
{
    this._appetizers.push(appetizer);
}
// function for adding a main course
addMainCourse(mainCourse)
{
    this._mainCourses.push(mainCourse)
}
// function for adding a dessert
addDessert(dessert)
{
    this._desserts.push(dessert)
}
//function for adding the total and returning the result
getTotal ()
{
    let total = 0;
    let beverageTotal = this._beverages.forEach(function(beverage)
    {
        total += parseFloat(beverage.price);
    });

    let appetizerTotal = this._appetizers.forEach(function(appetizer) 
    {
        total += parseFloat(appetizer.price);
    });

    let mainCourseTotal = this._mainCourses.forEach(function(mainCourse)
    {
        total += parseFloat(mainCourse.price);
    });

    let dessertTotal = this._desserts.forEach(function(dessert)
    {
        total += parseFloat(dessert.price);
    });

    return total.toFixed(2);
}

}



