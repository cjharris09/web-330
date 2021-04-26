 /*--
============================================
; Title: Assignment 6.2
; Author: Chris Harris
; Date: 25 April 2021
; Description: .
;===========================================
*/
export class FloatMaxField{
    constructor(name, field, max){
        this.name = name;
        this.field = field;
        this.max = max;
    }
    validate(){
        let field = parseFloat(this.field);
        return (field < this.max);
    }
    getMessage(){
        return `${this.name} must be less than ${this.max} you entered ${this.field}.`
    }
}