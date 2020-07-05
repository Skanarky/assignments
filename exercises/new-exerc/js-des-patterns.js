"use strict";

const callNumCounter = callNum();

// SRC: https://medium.com/better-programming/javascript-design-patterns-25f0faaaa15
// CREDITS: https://medium.com/@drenther

// SOME THEORY:

// Categories of JS/ES6 Design Patterns:
// (call main categoryFn with the category name and get the examples and the theory/text)

// 1. Creational (object creation mechanism) - Constructor Pattern, Factory Pattern, Prototype Pattern and Singleton Pattern
categoryFn('creational')([
    constructorPattern,
    factoryPattern,
    prototypePattern,
    singletonPattern
]);

// 2. Structural (class and object composition) - Adapter Pattern, Composite Pattern, Decorator Pattern,
// Façade Pattern, Flyweight Pattern and Proxy Pattern
categoryFn('structural')([
    adapterPattern,
    compositePattern
]);

// 3. Behavioral (communication between dissimilar objects) - Chain of Responsibility Pattern, Command Pattern,
// Iterator Pattern, Mediator Pattern, Observer Pattern, State Pattern, Strategy Pattern and Template Pattern
categoryFn('behavioral')([ ]);

// CODE:

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

function capitalizeOne(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// main
function categoryFn(type) {
    console.log(`${callNumCounter()}. ${capitalizeOne(type)} Category:`);
    return (patternFnArr) => {

        separator("v", 3);

        patternFnArr.map(patternFn => {
            patternFn();
            separator("-", 7);
        });

    }
}

// - - - Patterns - - -

// 1.1.

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

// 1.2.

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

// 1.3.

function prototypePattern() {
    console.log("- Prototype Pattern")
    console.log("* object-based creational design pattern")
    console.log("* we use a sort of a “skeleton” of an existing object to create or instantiate new objects")
    console.log("* specifically important and beneficial to JavaScript because it utilizes prototypal inheritance instead of a classic object-oriented inheritance -> JavaScript’s strength and has native support")
    console.log("* EXAMPLE: ")

    const car = {
        noOfWheels: 4,
        start() {
            return 'br-r-r-r';
        },
        stop() {
            return 'crickets...';
        },
    };

    // using Object.create as was recommended by ES5 standard
    const myCar = Object.create(car, { owner: { value: 'John' } });

    console.log(myCar.__proto__ === car);
    console.log(myCar.start());
    console.log(myCar.stop());
    console.log(myCar.noOfWheels === car.noOfWheels);
}

// 1.4.

function singletonPattern() {
    console.log("- Singleton Pattern")
    console.log("* special creational design pattern in which only one instance of a class can exist")
    console.log("* real-life examples: angular services; mongoose library for MongoDB")
    console.log("* specifically important and beneficial to JavaScript because it utilizes prototypal inheritance instead of a classic object-oriented inheritance -> JavaScript’s strength and has native support")
    console.log("* EXAMPLE: ")

    class Database {
        constructor(data) {
            // if (Database.exists) {
            //     return Database.instance;
            // }
            if (Database.instance) {
                return Database.instance;
            }
            this._data = data;
            Database.instance = this;
            // Database.exists = true;
            return this;
        }
      
        getData() {
            return this._data;
        }
      
        setData(data) {
            this._data = data;
        }
    }

    const httpService = new Database('httpService');
    console.log(httpService.getData()); // httpService
    
    const eventService = new Database('eventService');
    console.log(eventService.getData());
    eventService.setData('lastServiceSet');
    console.log(eventService.getData());
}

// 2.1.

function adapterPattern() {
    console.log("- Adapter Pattern")
    console.log("* structural pattern where the interface of one class is translated into another")
    console.log("* it lets classes work together that could not otherwise because of incompatible interfaces")
    console.log("* often used to create wrappers for new refactored APIs so that other existing old APIs can still work with them")
    console.log("* EXAMPLE: ")

    class OldCalculator {
        constructor() {
            this.operations = function(term1, term2, operation) {
                switch (operation) {
                case 'add':
                    return term1 + term2;
                case 'sub':
                    return term1 - term2;
                default:
                    return NaN;
                }
            };
        }
    }

    class NewCalculator {
        constructor() {
            this.add = function(term1, term2) {
                return term1 + term2;
            };
            this.sub = function(term1, term2) {
                return term1 - term2;
            };
        }
    }

    class CalcAdapter {
        constructor() {
            const newCalc = new NewCalculator();
            
            // !!! adapting 'operations' method, since the old software uses that method
            this.operations = function(term1, term2, operation) {
                switch (operation) {
                case 'add':
                    // using the new implementation under the hood
                    return newCalc.add(term1, term2);
                case 'sub':
                    return newCalc.sub(term1, term2);
                default:
                    return NaN;
                }
            };
        }

    }

    console.log('Calculator implementations... ');

    const oldCalc = new OldCalculator();
    console.log(oldCalc.operations(10, 5, 'add'));
    
    const newCalc = new NewCalculator();
    console.log(newCalc.add(10, 5));
    
    const adaptedCalc = new CalcAdapter();
    console.log(adaptedCalc.operations(10, 5, 'add'));

}

// 2.2.

function compositePattern() {
    console.log("- Composite Pattern")
    console.log("* structural design pattern that composes objects into tree-like structures to represent whole-part hierarchies")
    console.log("* each node in the tree-like structure can be either an individual object (Leaf Component) or a composed collection of objects (Composite Component)")
    console.log("* each node is treated uniformly")
    console.log("* EXAMPLE: ")

    class Component {
        constructor(name) {
            this._name = name;
        }
      
        getNodeName() {
            return this._name;
        }
      
        // abstract methods that need to be overridden
        getType() {}
      
        addChild(component) {}
      
        removeChildByName(componentName) {}
      
        removeChildByIndex(index) {}
      
        getChildByName(componentName) {}
      
        getChildByIndex(index) {}
      
        noOfChildren() {}
      
        static logTreeStructure(root) {
            let treeStructure = '';
            function traverse(node, indent = 0) {
                treeStructure += `${'--'.repeat(indent)}${node.getNodeName()}\n`;
                indent++;
                for (let i = 0, length = node.noOfChildren(); i < length; i++) {
                    traverse(node.getChildByIndex(i), indent);
                }
            }
      
            traverse(root);
            return treeStructure;
        }
    }
      
    class Leaf extends Component {
        constructor(name) {
            super(name);
            this._type = 'Leaf Node';
        }
      
        getType() {
            return this._type;
        }
      
        noOfChildren() {
            return 0;
        }
    }
      
    class Composite extends Component {
        constructor(name) {
            super(name);
            this._type = 'Composite Node';
            this._children = [];
        }

        getType() {
            return this._type;
        }

        addChild(component) {
            this._children = [...this._children, component];
        }

        removeChildByName(componentName) {
            this._children = [...this._children].filter(component => component.getNodeName() !== componentName);
        }

        removeChildByIndex(index) {
            this._children = [...this._children.slice(0, index), ...this._children.slice(index + 1)];
        }

        getChildByName(componentName) {
            return this._children.find(component => component.name === componentName);
        }

        getChildByIndex(index) {
            return this._children[index];
        }

        noOfChildren() {
            return this._children.length;
        }
    }

    const tree = new Composite('root');
    tree.addChild(new Leaf('left'));
    const middle = new Composite('middle');
    tree.addChild(middle);
    middle.addChild(new Leaf('middle-middle'));
    const right = new Composite('right');
    tree.addChild(right);
    right.addChild(new Leaf('right-left'));
    const rightMid = new Composite('right-middle');
    right.addChild(rightMid);
    right.addChild(new Leaf('right-right'));
    rightMid.addChild(new Leaf('left-end'));
    rightMid.addChild(new Leaf('right-end'));

    console.log(Component.logTreeStructure(tree));

}
