class Uber {
    static BaseFare = 10;
    static CostPerMile = 2;
    static CostPerMinute = 1;
    static BookingFee = 6;

    constructor(time = 1, mile = 1) {
        this.time = time;
        this.mile = mile;
    }

    totalPrice(time = this.time, mile = this.mile) {
        const total = Uber.BaseFare + Uber.BookingFee + (Uber.CostPerMinute * time) + (Uber.CostPerMile * mile);
        console.log(`The total price is $${total.toFixed(2)} only`);
    }
}

// Example usage:
const bike = new Uber();
bike.totalPrice(15, 10); 
bike.totalPrice(10, 10); 
