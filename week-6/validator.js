 /*--
============================================
; Title: Assignment 6.2
; Author: Chris Harris
; Date: 25 April 2021
; Description: the validator.js.
;===========================================
*/

import { RequiredField } from "./required-field.js"
import { FloatField } from "./float-field.js"
import { FloatMinField } from "./float-min-field.js"
import { FloatMaxField } from "./float-max-field.js"


export class Validator {
    validators = [];
    messages = [];
    constructor(name, field){
        this.name = name;
        this.field = field;
    }
    addRequiredField(){
        this.validators.push(new RequiredField(this.name, this.field));
    }
    addRequiredFieldFloat(){
        this.validators.push(new FloatField(this.name, this.field));
    }
    addFloatMinField(min){
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }
    addFloatMaxField(max){
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }
    //
    validate(){
        for (const i of this.validators) { 
            if (!i.validate()){
                this.messages.push(i.getMessage());
            }
            
        }
        return this.messages.length == 0;
    }
}