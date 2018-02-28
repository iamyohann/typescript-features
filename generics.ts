// identity function

function identity<T>(arg: T): T {
    return arg;
}

function len<T>(arg: T[]): number {
    return arg.length;
}

// Generic interfaces
interface Identity<T> {
    name: T;
}

function printName<T>(i: Identity<T>) {
    return `${i.name}`;
}

let i1 = { name: "foo" };
let i2 = { name: 10 };

console.log(printName(i1));
console.log(printName(i2));

// Generic classes

class Printer<T> {
    constructor(private delimiter = " ") {}

    public print(...args: T[]): string {
        let str: string = "";
        args.forEach((arg: T) => {
            str += `${arg}${this.delimiter}`;
        });

        return str;
    }
}

const printer = new Printer(",");
console.log(printer.print(1, 2, 3));
console.log(printer.print("a", "b", "c"));

// Generics constraints

interface ILengthwise {
    length: number;
}

function loggingIdentity<T extends ILengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

// loggingIdentity(3); Error!

console.log(loggingIdentity([1, 2, 3]));
console.log(loggingIdentity("foobar"));
console.log(loggingIdentity({ length: 5 }));

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
// getProperty(x, "m"); // error:
