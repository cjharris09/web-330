 /*--
============================================
; Title: Assignment 6.2
; Author: Chris Harris
; Date: 25 April 2021
; Description: the float-field.js.
;===========================================
*/
export class FloatField{
    constructor(name, field){
        this.name = name;
        this.field = field;
    }
    validate(){
        let check = parseFloat(this.field);
        return !isNaN(check);
    }
    getMessage(){
        return `${this.name} must be a float value. You entered ${this.field}.`
    }
}