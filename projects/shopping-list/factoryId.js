
//  Factories generate and KEEP TRACK of the id-s!!!
//  You can make them as complex as you want inside (with letters, symbols,
//numbers, etc... not jsut numbers, like example below!)

function factory() {
    return {
        id: 0,
        genId: function () {
            this.id++;
            return this.id;
        }
    }
}

function factory2(){
    let id = 0;
    return function(){
        id++;
        return id;
    }
}

var idGenerator = factory();
var idGenerator2 = factory2();
idGenerator();
idGenerator();
idGenerator();
idGenerator2();
idGenerator2();
idGenerator2();

console.log(idGenerator()); //shows the last genereated
console.log(idGenerator2()); //shows the last genereated

// console.log(idGenerator());

// let idGenerator = factory();

// for(let i = 0; i < 10; i++){
//     console.log(idGenerator.genId());
// }