export class FloatMinField{
    constructor(name, field, min){
        this.name = name;
        this.field = field;
        this.min = min;
    }
    validate(){
        let field = parseFloat(this.field);
        return (field > this.min);
    }
    getMessage(){
        return `${this.name} must be more than ${this.min}. You entered ${this.field}.`
    }
}