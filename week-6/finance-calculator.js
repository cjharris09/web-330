export class FinanceCalculator{
    static MONTHS_IN_A_YEAR = 12;
    static calculateFutureValue(monthlyPayment, rate, years){
        let month = years * FinanceCalculator.MONTHS_IN_A_YEAR;
        let interestRate = 1 + rate/100;
        let presentValue = monthlyPayment * month;
        let futureValue = presentValue * (Math.pow(interestRate, month));
        return futureValue.toFixed(2);
        console.log(futureValue)
    }
    static convertToCurrency(field){
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });

        return currencyFormatter.format(field);
    }

}