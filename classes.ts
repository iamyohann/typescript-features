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

// Access modifiers

// Private cannot be accessed outside of class
class Citizen {
    private name: string;
    protected active: boolean;

    constructor(name: string) {
        this.name = name;
        this.active = true;
    }

    get theName() : string {
        return this.name;
    }
}


// protected members can be accessed by sub types
class Customer extends Citizen {
    constructor(name: string) {
        super(name);
    }

    get isActive() {
        return this.active;
    }
}

console.log(new Citizen("John doe").theName);
console.log(new Customer("C").isActive);

// Constructor initialization short hand (automatic initialization)
// aka Parameter properties
class ConstructorInitialization {
    constructor(private _a: number = 1, private _b: string = 'two') {
    }

    get a() : number {
        return this._a;
    }

    get b() : string {
        return this._b;
    }
}

const c1 = new ConstructorInitialization();
const c2 = new ConstructorInitialization(3, 'four');
console.log(c1.a, c1.b);
console.log(c2.a, c2.b);

// Readonly, can only be initialized in the constructor

class ReadOnly {
    constructor(public readonly foo: string = 'bar') {}
}

const ro = new ReadOnly();

// ro.foo = 'baz'; Error!

// Static properties
class StaticProperties {
    static coefficient : number = 1.234;

    getResult(num: number) : number {
        return StaticProperties.coefficient * num;
    }
}

const sp = new StaticProperties();

console.log(sp.getResult(10), StaticProperties.coefficient);


// Abstract classes

abstract class AbstractGreeting {
    abstract sayHello() : void;
    constructor(protected name: string) {}
}

// const ab = new Abstract('foo'); Error!

class Greeting extends AbstractGreeting {
    sayHello() {
        return `Hello, ${this.name}`;
    }
    constructor(name: string) {
        super(name);
    }
}

const greeting = new Greeting('John Doe');

console.log(greeting.sayHello());