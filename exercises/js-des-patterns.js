"use strict";

let callNum = 0;

// THEORY: (remove it eventually - it will all come from the function call)
// Categories of JS/ES6 Design Patterns ("Design pattern -> general, reusable solution to a commonly occurring problem in software design")
// 1. Creational (object creation mechanism) - Constructor Pattern, Factory Pattern, Prototype Pattern, and Singleton Pattern
categoryFn('Creational')([ constructorPattern ]);
// 2. Structural (class and object composition) - Adapter Pattern, Composite Pattern, Decorator Pattern,
// Façade Pattern, Flyweight Pattern, and Proxy Pattern
categoryFn('Structural');
// 3. Behavioral (communication between dissimilar objects) - Chain of Responsibility Pattern, Command Pattern,
// Iterator Pattern, Mediator Pattern, Observer Pattern, State Pattern, Strategy Pattern, and Template Pattern
categoryFn('Behavioral');





























// CODE:
// (includes functions that return logs and examples, simulating flash cards in order to help memorizing the material (call a pattern or category
// function and get the examples and the theory/text))

function separator(sep, times) {
    let sepStr = '';
    for (let i = 0; i < times; ++i) {
        sepStr += i === times ? sep : (sep + " ");
    }
    console.log(sepStr);
}

function categoryFn(type) {
    callNum = callNum + 1;
    console.log(`${callNum}. ${type} Category:`)
    separator("v", 3);
    return (patternArr) => patternArr.map(pattern => {
        pattern();
        separator("-", 7);
    })
}

// - - - Patterns - - -
// 1.

function constructorPattern() {
    console.log("- Constructor Pattern")
    console.log("* class-based creational design pattern")
    console.log("* it's a special functions that is used to instantiate new objects with methods and properties defined by that function")
    console.log("* it's more of a basic language construct than a pattern in most object-oriented languages")
    console.log("* EXAMPLE: ")

    // Traditional Function-based syntax
    // function SoccerPlayer(name, position) {
    //     this.name = name;
    //     this.position = position;

    //     this.getDetails = function() {
    //         return this.name + " plays as " + this.position
    //     }
    // }
    
    // ES6 Class syntax
    class SoccerPlayer {
        constructor(name, position) {
            this._name = name;
            this._position = position;

            this.getDetails = function() {
                return `${this._name} plays as ${this._position}`
            }
        }
    }

    const deGea = new SoccerPlayer('De Gea', 'goalkeeper');
    console.log(deGea.getDetails());
}