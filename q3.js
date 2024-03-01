class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Country: ${this.country}`);
    }
}

// Example usage:
const person1 = new Person("Kishore", 25, "India");
const person2 = new Person("Kumar", 30, "India");

console.log("Person-1 Details:");
person1.displayDetails();

console.log("\nPerson-2 Details:");
person2.displayDetails();
