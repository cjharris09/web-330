 /*--
============================================
; Title: Assignment 6.2
; Author: Chris Harris
; Date: 25 April 2021
; Description: .
;===========================================
*/


export class RequiredField {
    constructor(name, field){
    this.name = name
    this.field = field
    }
    validate(){
        let valid = Boolean(this.field);
        if (valid){
            valid = Boolean(this.field.trim());
        }
        return valid;
    }
    getMessage(){
        return `${this.name} is a required field.`
    }
}

