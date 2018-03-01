enum Directions {
    Up, Down, Left, Right,
}

console.log(Directions.Up); // 0

enum DirectionsWithInitializer {
    Up = 1, Down, Left, Right,
}

console.log(DirectionsWithInitializer.Up); // 1

// Arbitrary values

enum Foo {
    Bar = 12, Baz = 19,
}

console.log(Foo.Bar, Foo.Baz); // 12,19
