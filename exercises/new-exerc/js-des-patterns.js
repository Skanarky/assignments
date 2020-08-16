"use strict";

const callNumCounter = callNum();

// SRC: https://medium.com/better-programming/javascript-design-patterns-25f0faaaa15
// CREDITS: https://medium.com/@drenther

// THEORY:

// Categories of JS/ES6 Design Patterns (selected patterns by the author, find more in the books provided as article references):
// (call main categoryFn with the category name and get the examples and the theory text)

// 1. Creational (object creation mechanism) - Constructor Pattern, Factory Pattern, Prototype Pattern and Singleton Pattern

const creationalPattern = categoryFn('creational');

// 2. Structural (class and object composition and communication, for more SIMILAR!? objects) - Adapter Pattern, Composite Pattern, Decorator Pattern,
// Façade Pattern, Flyweight Pattern and Proxy Pattern

const structuralPattern = categoryFn('structural');

// 3. Behavioral (composition and communication of objects, convenient if more DISSIMILAR!? objects, loose coupling) - Chain of Responsibility Pattern, Command Pattern,
// Iterator Pattern, Mediator Pattern, Observer Pattern, State Pattern, Strategy Pattern and Template Pattern

const behavioralPattern = categoryFn('behavioral');

// IMPLEMENTATION:

creationalPattern(
    constructorPattern,
    factoryPattern,
    prototypePattern,
    singletonPattern
);
structuralPattern(
    adapterPattern,
    compositePattern,
    decoratorPattern,
    façadePattern,
    flyweightPattern,
    proxyPattern
);
behavioralPattern(
    chainOfResponsibilityPattern,
    commandPattern,
    iteratorPattern,
    mediatorPattern,
    observerPattern,
    statePattern,
    strategyPattern,
    templatePattern
);

// - - - - - - -

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
    console.log();
}

function capitalizeOne(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// main
function categoryFn(type) {
    return function ( ...someArgs ) {

        console.log(`${callNumCounter()}. ${capitalizeOne(type)} Category:`);
        separator("v", 3);

        someArgs.map(patternFn => {
            patternFn();
            separator("-", 7);
        });

    }
}

// patterns

// 1.1.

function constructorPattern() {
    console.log("- Constructor Pattern")
    console.log("* class-based creational design pattern")
    console.log("* it's a special functions that is used to instantiate new objects with methods and properties defined by that function")
    console.log("* it's more of a basic language construct than a pattern in most object-oriented languages")
    console.log("* EXAMPLE: ")

    // Traditional Function-based syntax
    // function SoccerPlayer(name, position) {
    //     return {
    //         name: name,

    //         position: position,

    //         getDetails: function() {
    //             return this.name + " plays as " + this.position
    //         }
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
    // const deGea = SoccerPlayer('De Gea', 'goalkeeper');
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
    console.log(myCar.owner);
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
            // exists not needed!?
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

    const eventService2 = new Database('eventService');

    eventService.setData('lastServiceSet');
    console.log(eventService.getData()); // -> lastServiceSet
    console.log(eventService2.getData()); // -> lastServiceSet
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
            return this._children.find(component => component._name === componentName);
        }

        getChildByIndex(index) {
            return this._children[index];
        }

        noOfChildren() {
            return this._children.length;
        }
    }

    const tree = new Composite('root');

    const left = new Leaf('left');
    const middle = new Composite('middle');
    const right = new Composite('right');

    tree.addChild(left);
    tree.addChild(middle);
    tree.addChild(right);

    middle.addChild(new Leaf('middle-middle'));

    right.addChild(new Leaf('right-left'));
    right.addChild(new Composite('right-middle'));
    right.addChild(new Leaf('right-right'));

    tree.getChildByName('right').getChildByName('right-middle').addChild(new Leaf('left-end'));
    tree.getChildByName('right').getChildByName('right-middle').addChild(new Leaf('right-end'));

    console.log(Component.logTreeStructure(tree));

}

// 2.3.

function decoratorPattern() {
    console.log("- Decorator Pattern")
    console.log("* structural design pattern that focuses on the ability to add behavior or functionalities to existing classes dynamically")
    console.log("* another viable alternative to sub-classing")
    console.log("* EXAMPLE: ")

    // main class
    class Photographer {
        constructor(name, website, type) {
            this._name = name;
            this._website = website;
            this.type = type;
            this.minHourlyRate = 30;
        }

        getDescription() {
            return `Photographers name is ${this._name} - ${this.type}\nTheir website is '${this._website}'. Hourly rate $${this.minHourlyRate}.`
        }
    }

    // decorators
    function isFashion(photographer) {
        photographer.type = 'Fashion Professional';
        photographer.minHourlyRate += 120;

        return photographer;
    }
    function isSport(photographer) {
        photographer.type = 'Sport Professional';
        photographer.minHourlyRate += 70;

        return photographer;
    }
    function bookedPhotographer(photographer) {
        photographer.isBooked = true;

        photographer.getSchedule = function () {
            return `${photographer._name} is booked.`
        }
    }
    function unbookedPhotographer(photographer) {
        photographer.isBooked = false;

        photographer.getSchedule = function () {
            return `${photographer._name} is available.`
        }
    }

    const rankinUK = isFashion(new Photographer('Rankin', 'www.rankinphoto.co.uk', 'Some'));
    console.log(rankinUK.getDescription());

    bookedPhotographer(rankinUK);
    console.log(rankinUK.getSchedule());

    unbookedPhotographer(rankinUK);
    console.log(rankinUK.getSchedule());

    const someSport = isSport(new Photographer('Some Name', 'www.somesite.com', undefined));
    unbookedPhotographer(someSport);
    console.log(someSport.getDescription());
    console.log(someSport.getSchedule());

}

// 2.4.

function façadePattern() {
    console.log("- Façade Pattern")
    console.log("* structural design pattern that is widely used in JavaScript libraries")
    console.log("* it is used to provide a unified and simpler, public-facing, interface for ease of use that shields away from the complexities of its consisting subsystems or subclasses")
    console.log("* EXAMPLE: ")

    let currentId = 0;

    class ComplaintRegistry {
        registerComplaint(customer, type, details) {
            const id = ComplaintRegistry._uniqueIdGenerator();
            let complaint;
            if (type === 'service') {
                complaint = new ServiceComplaints();
            } else {
                complaint = new ProductComplaints();
            }
            return complaint.addComplaint({ id, customer, details });
        }

        findComplaint(id) {
            // if (new ServiceComplaints().getComplaint(id)) {
            //     return new ServiceComplaints().getComplaint(id);
            // } else {
            //     return new ProductComplaints().getComplaint(id);
            // }
            // return new ProductComplaints().getComplaint(id) || new ServiceComplaints().getComplaint(id);
            return [ ...new ProductComplaints().complaints, ...new ServiceComplaints().complaints ].find(complaint => complaint.id === id);
        }

        static _uniqueIdGenerator() {
            return ++currentId;
        }
    }

    class Complaints {
        constructor() {
            this.complaints = [];
        }

        addComplaint(complaint) {
            this.complaints.push(complaint);
            return this.replyMessage(complaint);
        }

        getComplaint(id) {
            return this.complaints.find(complaint => complaint.id === id);
        }

        replyMessage(complaint) {}
    }

    class ProductComplaints extends Complaints {
        constructor() {
            super();
            if (ProductComplaints.exists) {
                return ProductComplaints.instance;
            }
            ProductComplaints.instance = this;
            ProductComplaints.exists = true;
            return this;
        }

        replyMessage({ id, customer, details }) {
            return `Complaint No. ${id} reported by ${customer} regarding '${details}' have been filed with the Products Complaint Department.\nReplacement/Repairment of the product as per terms and conditions will be carried out soon.`;
        }
    }

    class ServiceComplaints extends Complaints {
        constructor() {
            super();
            if (ServiceComplaints.exists) {
                return ServiceComplaints.instance;
            }
            ServiceComplaints.instance = this;
            ServiceComplaints.exists = true;
            return this;
        }

        replyMessage({ id, customer, details }) {
            return `Complaint No. ${id} reported by ${customer} regarding '${details}' have been filed with the Service Complaint Department.\nThe issue will be resolved or the purchase will be refunded as per terms and conditions.`;
        }
    }

    const registry = new ComplaintRegistry();

    const reportedService = registry.registerComplaint('Martha', 'service', 'availability');

    const reportedProduct = registry.registerComplaint('Jane', 'product', 'faded color');
    const reportedProduct2 = registry.registerComplaint('Karen', 'product', 'yellow spots');

    console.log(reportedService);
    console.log(reportedProduct);
    console.log(reportedProduct2);

    console.log(registry.findComplaint(2));
    console.log(registry.findComplaint(4));
    console.log(registry.findComplaint(1));

}

// 2.5.

function flyweightPattern() {
    console.log("- Flyweight Pattern")
    console.log("* structural design pattern focused on efficient data sharing through fine-grained objects")
    console.log("* it is used for efficiency and memory conservation purposes")
    console.log("* EXAMPLE: ")

    class Programming {
        constructor(paradigm, skillLevel) {
            this.paradigm = paradigm;
            this.skillLevel = skillLevel;
        }
    }

    class ProgrammingFactory {

        constructor() {
            this.programmingInstances = [];
        }

        createProgramming(paradigm, skillLevel) {
            return this.findProgramming(paradigm) || this.createOneProgramming(paradigm.toLowerCase(), skillLevel);
        }

        createOneProgramming(paradigm, skillLevel) {
            const programming = new Programming(paradigm, skillLevel);
            this.programmingInstances = [ ...this.programmingInstances, programming ];
            return programming;
        }

        findProgramming(paradigm) {
            return this.programmingInstances.find(pr => pr.paradigm === paradigm.toLowerCase());
        }

    }

    const factory = new ProgrammingFactory();

    const objOrPr = factory.createProgramming('OOP', 2);
    const oOPr = factory.createProgramming('OOp', 2);

    const functional = factory.createProgramming('functional', 3);

    console.log(objOrPr.paradigm);
    console.log(objOrPr.skillLevel);
    console.log('objOrPr equals oOPr: ', objOrPr === oOPr);
    console.log(oOPr.paradigm);

    console.log(functional.paradigm);
    console.log(functional.skillLevel);
    console.log('objOrPr equals functional: ', objOrPr === functional);

    console.log(factory.findProgramming('OOP'));
    console.log(factory.findProgramming('oop'));
    console.log(factory.findProgramming('Functional'));
    console.log(factory.findProgramming('Procedural'));

}

// 2.6.

function proxyPattern() {
    console.log("- Proxy Pattern")
    console.log("* structural design pattern; acts as a surrogate or placeholder for another object to control access to it")
    console.log("* it is used in situations in which a target object is under constraints and may not be able to handle all its responsibilities efficiently")
    console.log("* a proxy will provide the same interface to the client and adds a level of indirection to support controlled access to the target object to avoid undue pressure on it")
    console.log("* EXAMPLE: ")

    function networkFetch(url) {
        return `${url} - Response from network`;
    }

    // Proxy
    // ES6 Proxy API = new Proxy(target, handler);
    const cache = [];
    const proxiedNetworkFetch = new Proxy(networkFetch, {
        apply(target, thisArg, args) {
            const urlParam = args[0];
            if (cache.includes(urlParam)) {
                return `${urlParam} - Response from cache`;
            } else {
                cache.push(urlParam);
                return Reflect.apply(target, thisArg, args);
            }
        }
    });

    console.log(proxiedNetworkFetch('www.apigetdogs.com/dogPic.jpg')); // from network
    console.log(proxiedNetworkFetch('www.apigetdogs.com/dogPic.jpg')); // from cache'

}

// 3.1.

function chainOfResponsibilityPattern() {
    console.log("- Chain of Responsibility Pattern")
    console.log("* behavioral design pattern that provides a chain of loosely coupled objects")
    console.log("* each of these objects can choose to act on or handle the request of the client")
    console.log("* good example is event bubbling in DOM in which an event propagates through a series of nested DOM elements, one of which may have an “event listener” attached to listen to and act on the event")
    console.log("* EXAMPLE: ")

    class CumulativeSum {
        constructor(initialValue = 0) {
            this.sum = initialValue;
        }
      
        add(value) {
            this.sum += value;
            return this;
        }
    }

    const sum1 = new CumulativeSum();
    console.log(sum1.add(10).add(5).add(2).sum);
    
    const sum2 = new CumulativeSum(10);
    console.log(sum2.add(10).add(3).sum);

    console.log(sum2.add(sum1.sum).sum); // 40
}

// 3.2.

function commandPattern() {
    console.log("- Command Pattern")
    console.log("* behavioral design pattern that aims to encapsulate actions or operations as objects")
    console.log("* it allows loose coupling of systems and classes by separating the objects that request an operation or invoke a method from the ones that execute or process the actual implementation")
    console.log("* good example are Redux, Clipboard API")
    console.log("* EXAMPLE: ")

    class ToyotaCar {
        constructor(model, price, built) {
            this._model = model;
            this._price = price;
            this._built = built;
        }
        price() {
            return `Toyota ${this._model} costs: $${this._price}`;
        }
        built() {
            return `Toyota ${this._model} is manufactured in: ${this._built}`;
        }
    }

    class CarInfo {
        constructor(toyotaModel) {
            this._toyotaModel = toyotaModel;
            this._providedInfo = [];
        }
        getInfo(info) {
            const infToLC = info.toLowerCase();
            if (this._toyotaModel[infToLC]) {
                this._providedInfo = [ ...this._providedInfo, infToLC ];
                return this._toyotaModel[infToLC]();
            } else {
                return 'No such information!'
            }
        }
    }

    const tacoma = new ToyotaCar('Tacoma', 35000, 'Mexico');
    const fourRunner = new ToyotaCar('4Runner', 45000, 'Japan');

    const info4Run = new CarInfo(tacoma);
    const infoTacoma = new CarInfo(fourRunner);

    console.log(infoTacoma.getInfo('price'));
    console.log(infoTacoma.getInfo('built'));
    console.log(infoTacoma._providedInfo);

    console.log(info4Run.getInfo('price'));
    console.log(info4Run.getInfo('built'));
    console.log(info4Run.getInfo('curb weight'));
    console.log(info4Run._providedInfo);
}

// 3.3.

function iteratorPattern() {
    console.log("- Iterator Pattern")
    console.log("* behavioral design pattern that provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation")
    console.log("* iterators have a special kind of behavior where we step through an ordered set of values one at a time by calling next() until we reach the end")
    console.log("* the introduction of Iterator and Generators in ES6 made the implementation of the iterator pattern extremely straightforward")
    console.log("* EXAMPLE: ")

    // using Iterator
    class IteratorClass {
        constructor(data) {
            this.index = 0;
            this.data = data;
        }

        [Symbol.iterator]() {
            return {
                next: () => {
                        if (this.index < this.data.length) {
                            return { value: this.data[this.index++], done: false };
                        } else {
                            this.index = 0; // to reset iteration status
                            return { done: true };
                        }
                    }
                };
        }
    }

    // using Generator
    function* iteratorUsingGenerator(collection) {
        var nextIndex = 0;

        while (nextIndex < collection.length) {
            yield collection[nextIndex++];
        }
    }

    const withIter = new IteratorClass(['Testing', 'iterator', 'using', 'Iterator']);

    console.log(withIter[Symbol.iterator]().next().value);
    console.log(withIter[Symbol.iterator]().next().value);
    console.log(withIter[Symbol.iterator]().next().value);
    console.log(withIter[Symbol.iterator]().next().value);

    const withGen = iteratorUsingGenerator(['Testing', 'iterator', 'using', 'Generator']);
    console.log(withGen.next().value);
    console.log(withGen.next().value);
    console.log(withGen.next().value);
    // console.log(withGen.next().done); // false -> but it will make the next next() value undefined
    // => next can be called only collection.length times
    console.log(withGen.next().value);
    console.log(withGen.next().done); // true
    console.log(withGen.next().value); // undefined


    // OR USE:
    const withIter2 = new IteratorClass(['Testing', 'iterator', 'using', 'Iterator', '- 2']);
    const withGen2 = iteratorUsingGenerator(['Testing', 'iterator', 'using', 'Generator', '- 2']);

    console.log(...withIter2);
    console.log(...withGen2);

}

// 3.4.

function mediatorPattern() {
    console.log("- Mediator Pattern")
    console.log("* behavioral design pattern that encapsulates how a set of objects interact with each other")
    console.log("* it provides the central authority over a group of objects by promoting loose coupling, keeping objects from referring to each other explicitly")
    console.log("* EXAMPLE: ")

    class TrafficTower {

        constructor() {
            this._airplanes = [];
        }

        register(airplane) {
            this._airplanes.push(airplane);
            airplane.register(this);
        }

        deregister(airplane) {
            this._airplanes = this._airplanes.filter(arpl => arpl.coordinates !== airplane.coordinates);
            airplane.deregister();
        }
      
        requestCoordinates(airplane) {
            return this._airplanes.filter(plane => airplane !== plane).map(plane => plane.coordinates);
        }
    }
      
    class Airplane {

        constructor(coordinates) {
            this.coordinates = coordinates;
            this.trafficTower = null;
        }

        register(trafficTower) {
            this.trafficTower = trafficTower;
        }

        deregister() {
            this.trafficTower = null;
        }

        requestAPCoordinates() {
            if (this.trafficTower) {
                return this.trafficTower.requestCoordinates(this);
            } else {
                return null;
            }
        }

    }
      
    const tower = new TrafficTower();
    
    const airplanes = [new Airplane(10), new Airplane(20), new Airplane(30)];

    airplanes.forEach(airplane => {
        tower.register(airplane);
    });
    
    console.log(airplanes.map(airplane => airplane.requestAPCoordinates()));

    tower.deregister(airplanes[1]);

    console.log(airplanes.map(airplane => airplane.requestAPCoordinates()));

}

// 3.5.

function observerPattern() {
    console.log("- Observer Pattern")
    console.log("* behavioral design pattern that defines one-to-many dependencies between objects")
    console.log("* when one object (publisher) changes its state, all the other dependent objects (subscribers) are notified and updated automatically")
    console.log("* it's publisher/subscribers or event dispatcher/listeners pattern (the publisher is sometimes called the subject, and the subscribers observers)")
    console.log("* EXAMPLE: ")

    class Subject {
        constructor() {
            this._observers = [];
        }
      
        subscribe(observer) {
            this._observers.push(observer);
        }
      
        unsubscribe(observer) {
            this._observers = this._observers.filter(obs => observer !== obs);
        }
      
        fire(change) {
            this._observers.forEach(observer => {
                observer.update(change);
            });
        }
    }
    
    class Observer {
        constructor(state) {
            this.state = state;
            this.initialState = state;
        }
        
        update(change) {
            let state = this.state;
            switch (change) {
                case 'INC':
                    this.state = ++state;
                    break;
                case 'DEC':
                    this.state = --state;
                    break;
                default:
                    this.state = this.initialState;
            }
        }
    }
    
    // usage
    const sub = new Subject();
    
    const obs1 = new Observer(1);
    const obs2 = new Observer(19);
    
    sub.subscribe(obs1);
    sub.subscribe(obs2);
    
    sub.fire('INC');
    sub.fire('INC');
    sub.fire('INC');
    
    console.log(obs1.state);
    console.log(obs2.state);

    sub.fire('DEC');

    console.log(obs1.state);
    console.log(obs2.state);

    sub.unsubscribe(obs2);

    sub.fire('NONE'); // to initial state

    console.log(obs1.state);
    console.log(obs2.state); // no change

}

// 3.6.

function statePattern() {
    console.log("- State Pattern")
    console.log("* behavioral design pattern that allows an object to alter its behaviour based on changes to its internal state")
    console.log("* the object returned by a state pattern class seems to change its class")
    console.log("* it provides state-specific logic to a limited set of objects in which each object type represents a particular state")
    console.log("* EXAMPLE: ")

    class Light {
        constructor(light) {
            this.light = light;
        }

        sign() {
            return 'OUT OF SERVICE';
        }
    }
      
    class RedLight extends Light {
        constructor() {
            super('red');
        }

        sign() {
            return 'STOP';
        }
    }

    class YellowLight extends Light {
        constructor() {
            super('yellow');
        }

        sign() {
            return 'STEADY';
        }
    }
      
    class GreenLight extends Light {
        constructor() {
            super('green');
        }
      
        sign() {
            return 'GO';
        }
    }

    class OutOfSvcLight extends Light {
        constructor() {
            super('blinking yellow');
        }
    }

    class TrafficLight {
        constructor() {
            this.states = [new RedLight(), new YellowLight(), new GreenLight()];
            this.current = this.states[0];
        }
      
        change() {
            const totalStates = this.states.length;
            let currentIndex = this.states.findIndex(light => light === this.current);
            if (currentIndex + 1 < totalStates) {
                this.current = this.states[currentIndex + 1];
            } else {
                this.current = this.states[0];
            }
        }

        outOfSvc() {
            this.current = new OutOfSvcLight();
        }
      
        sign() {
            return this.current.sign();
        }
    }

    const trafficLight = new TrafficLight();
    
    console.log(trafficLight.sign());
    trafficLight.change();
    console.log(trafficLight.sign());
    trafficLight.change();
    console.log(trafficLight.sign());
    trafficLight.outOfSvc();
    console.log(trafficLight.sign());
    console.log(trafficLight.sign());
    trafficLight.change();
    console.log(trafficLight.sign());
    trafficLight.change();
    console.log(trafficLight.sign());
    trafficLight.change();
    console.log(trafficLight.sign());

}

// 3.7.

function strategyPattern() {
    console.log("- Strategy Pattern")
    console.log("* behavioral design pattern that allows encapsulation of alternative algorithms for a particular task")
    console.log("* it defines a family of algorithms and encapsulates them in such a way that they are interchangeable at runtime without client interference or knowledge")
    console.log("* EXAMPLE: ")

    class Trip {
        getPricing(place) {
            return place.price();
        }
    }

    class Place {
        constructor(name) {
            this._name = name;
        }
        price() {
            return `A trip to ${this._name} costs $${this._price}.`;
        }
    }

    class Cancun extends Place {
        constructor() {
            super('Cancun');
            this._price = 3000;
        }
    }
    class Bahamas extends Place {
        constructor() {
            super('Bahamas');
            this._price = 2500;
        }
    }
    class Bali extends Place {
        constructor() {
            super('Bali');
            this._price = 15000;
        }
    }

    const tripPlan = new Trip();

    console.log(tripPlan.getPricing(new Bahamas()));
    console.log(tripPlan.getPricing(new Bali()));

}

// 3.8.

function templatePattern() {
    console.log("- Template Pattern")
    console.log("* behavioral design pattern based on defining the skeleton of the algorithm or implementation of an operation, but deferring some steps to subclasses")
    console.log("* it lets subclasses redefine certain steps of an algorithm without changing the algorithm’s outward structure")
    console.log("* EXAMPLE: ")

    class Pet {
        constructor(name, speak) {
            this._name = name;
            this._speak = speak;
        }
        whatPet() {
            return `Your pet is a ${this.getType()} with name ${this._name}.`;
        }
        whatSpeaks() {
            return `${this._name} can ${this._speak}.`;
        }
    }

    class Cat extends Pet {
        constructor(name, speak) {
            super(name, speak);
        }
        getType() {
            return 'cat';
        }
    }

    class Dog extends Pet {
        constructor(name, speak) {
            super(name, speak);
        }
        getType() {
            return 'dog';
        }
    }

    const sparky = new Dog('Sparky', 'bark and growl');
    const tutsy = new Cat('Tutsy', 'meows very loud and annoyingly');

    console.log(sparky.whatPet());
    console.log(sparky.whatSpeaks());
    console.log(tutsy.whatPet());
    console.log(tutsy.whatSpeaks());

}
