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