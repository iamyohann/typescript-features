// named function

function add(x: number, y: number) : number {
    return x + y;
};

// anonymous and arrow functions
let add_anonymously = function(x: number, y: number) : number {
    return x + y;
};

let add_arrow = (x: number, y: number) : number => {
    return x + y;
};

console.log(add(1,2), add_anonymously(1,2), add_arrow(1,2));

// optional parameters
function say_hello(firstName: string, lastName? : string) {
    return `Hello, ${firstName}${ lastName ? ' ' + lastName: ''}`;
}

console.log(say_hello('John'));
console.log(say_hello('John', 'Doe'));

// rest parameters
function rest(a: number, b: number, ...others : Array<number>) {
    others.unshift(a, b);

    return others;
}

let others = [3,4,5];
console.log(rest(1,2, ...others));
console.log(others);

// overloads
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}