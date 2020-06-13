"use strict";

const callNumCounter = callNum();

// SRC: https://medium.com/better-programming/javascript-design-patterns-25f0faaaa15
// CREDITS: https://medium.com/@drenther

// THEORY: (remove eventually - it will all come from function calls)

// Categories of JS/ES6 Design Patterns ("Design pattern -> general, reusable solution to a commonly occurring problem in software design"):

// 1. Creational (object creation mechanism) - Constructor Pattern, Factory Pattern, Prototype Pattern, and Singleton Pattern
categoryFn('creational')([ constructorPattern, factoryPattern ]);

// 2. Structural (class and object composition) - Adapter Pattern, Composite Pattern, Decorator Pattern,
// Façade Pattern, Flyweight Pattern, and Proxy Pattern
categoryFn('structural')([ ]);

// 3. Behavioral (communication between dissimilar objects) - Chain of Responsibility Pattern, Command Pattern,
// Iterator Pattern, Mediator Pattern, Observer Pattern, State Pattern, Strategy Pattern, and Template Pattern
categoryFn('behavioral')([ ]);





























// CODE:
// (includes functions that return logs and examples, simulating flash cards in order to help memorizing the material (call a pattern or category
// function and get the examples and the theory/text))

// helpers
function callNum() {
    let count = 0;
    return () => {
        count += 1;
        return count;
    }
}

function separator(sep, times) {
    let sepStr = '';
    for (let i = 0; i < times; ++i) {
        sepStr += i === times ? sep : (sep + " ");
    }
    console.log(sepStr);
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// main
function categoryFn(type) {
    console.log(`${callNumCounter()}. ${capitalize(type)} Category:`);
    return (patternFnArr) => {

        separator("v", 3);

        patternFnArr.map(patternFn => {
            patternFn();
            separator("-", 7);
        });

    }
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

// 2.

function factoryPattern() {
    console.log("- Factory Pattern")
    console.log("* class-based creational design pattern")
    console.log("* provide a generic interface that delegates the responsibility of object instantiation to its subclasses")
    console.log("* frequently used when we need to manage or manipulate collections of objects that are different yet have many similar characteristics")
    console.log("* EXAMPLE: ")

    class BallGameFactory {
        constructor() {
            // remove type to make it more declarative
            // this.createBall = function(type) {
            this.createBall = function(TheClass) {
                let ball;

                // if (type === 'football' || type === 'soccer') {
                //     ball = new Football();
                // } else if (type === 'basketball') {
                //     ball = new Basketball();
                // }

                ball = new TheClass();

                ball.roll = function() {
                    return console.log(`The ${this._type} is rolling.`);
                }

                return ball;
            };
        }
    }

    class Football {
        constructor() {
            this._type = 'football';
            this.kick = function() {
                return console.log(`You kicked the ${this._type}.`);
            }
        }
    }

    class Basketball {
        constructor() {
            this._type = 'basketball';
            this.bounce = function() {
                return console.log(`You bounced the ${this._type}.`);
            };
        }
    }

    const theFactory = new BallGameFactory();

    // const soccer = theFactory.createBall('football');
    // const soccer = theFactory.createBall(Football);
    const soccer = theFactory.createBall(Football);
    const basketBall = theFactory.createBall(Basketball);

    soccer.roll();
    soccer.kick();
    // soccer.bounce(); // -> soccer.bounce is not a function

    basketBall.roll();
}