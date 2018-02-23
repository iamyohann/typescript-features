// Booleans
let isDone: boolean = false;
let isWorking: boolean = null;

// Numbers
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let float: number = 3.14;

// Strings
let color: string = 'blue';

// Arrays
let list: number[] = [1,2,3];
let anotherList: Array<number> = [1,2,3];

// Tuple
let tp: [string, number] = ['hello', 1];

// Enum
enum Status { Fail=0, Success };
enum Stage { Init=1, Progress, Finish };

let success: Status = Status.Fail;
let progress: Stage = Stage.Progress;

// Any types
let notSure: any = {};
notSure = null;
notSure.someMethodIfExists();

// Void
let onlyNullUndefined: void = null;
onlyNullUndefined = undefined;

// Null and undefined
let n: null = null;
let u: undefined = undefined;

// Never types, lack of return
function infiniteLoop(): never {
    while (true) {}
}

// Type assertions (type casting)
let someValue: any = "foobar";
let str: number = (<string>someValue).length;