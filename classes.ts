// Classes

interface Enrolment {
    name: string;
    id: number;
    enrolled: boolean;
    isEnrolled() : boolean;
}

class Student implements Enrolment {
    constructor(public name: string, public id: number, public enrolled: boolean = false) {

    }

    public isEnrolled() {
        return this.enrolled;
    }
}

let s: Student = new Student('Student1', 1, true);
let isEnrolled: boolean = s.isEnrolled();

// Inheritance

class Animal {
    move(distance: number = 0) {
        console.log(`Moved ${distance}`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('woof!');
    }
}

let d = new Dog();
d.move();
d.bark();

interface Life {
    name: string;
}

class Person implements Life {
    constructor(public name: string) {
    }
}

class Employee extends Person {
    employeeId: number;
    constructor(public name: string, public _employeeId: number) {
        super(name);

        this.employeeId = _employeeId;
    }
}