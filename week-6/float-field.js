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