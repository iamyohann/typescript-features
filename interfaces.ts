// Function params type checking
function printLabel(obj: { label: string }) {
    console.log(obj.label);
}

// Function return type checks
function lowerCase(str: string) : string {
    return str.toLowerCase();
}

// Return obj type checks
function labelLowerCase(obj: { label: string }) : { label: string } {
    obj.label = obj.label.toLowerCase();
    return obj;
}

// Interfaces
interface Student {
    age: number;
    name: string;

    // optional
    enrolled?: boolean;
}

function displayStudent(s: Student) {
    console.log(`Name: ${s.name} Age: ${s.age} Enrolled: ${s.enrolled ? 'yes': 'no' }`);
}

// Readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}

let p: Point = { x: 10, y: 16 };
// p.x = 10; Error!

// Read only Array's
let readonlyarr: ReadonlyArray<number> = [1,2,3];
// readonlyarr.push(10); Error!

// However we can type cast (type assert) back to a normal array
let writearr = (readonlyarr as Array<number>);
writearr.push(10);

// Interfaces with any number of optional types
interface AnyOptional {
    a: number;
    b: string;
    [propName: string]: any;
}

// interface function types
interface Funcs {
    createStudent(name: string, age: number, enrolled: boolean): Student;
}

interface Readable {
    read(...props: any[]) : any;

}

interface Writable {
    write(...props: any[]) : any;
}

interface Loadable extends Readable, Writable {

}

// classes
class ProjectFile implements Loadable {
    read(fileName: string) {
        console.log(`reading file ${fileName}`);
    }
    write(fileName: string, mode: string) {
        console.log(`writing file ${fileName} mode ${mode}`)
    }
}

