class Player {
    constructor() {
        this.name = "";
        this.totalCoins = 0;
        this.status = "Big";
        this.star = false;
        this.gameActive = true;
    }

    setName(namePicked) {
        if (namePicked === "Mario") {
            this.name = "Mario";
        } else if (namePicked === "Luigi") {
            this.name = "Luigi";
        } else {
            console.log(`Not a valid name. Choose between 'Mario' and 'Luigi'`);
        }
    }

    gotHit() {
        const statArr = ["Powered Up", "Big", "Small", "Dead"];
        if (this.status === statArr[0]) {
            this.status = statArr[1];
        } else if (this.status === statArr[1]) {
            this.status = statArr[2];
        } else if (this.status === statArr[2]) {
            this.status = statArr[3];
            this.gameActive = false;
        }
    }

    gotPowerUp() {
        this.status = "Powered Up";
    }

    addCoin() {
        this.totalCoins++;
    }

    print() {
        console.log(`\nName: ${this.name}\nCoins:${this.totalCoins}\nStatus:${this.status}\nActive Star: ${this.star}\n`);
    }
}

const mario = new Player();
mario.setName("Mario");

function genNo() {
    let randNo = Math.floor(Math.random() * 3);
    if (randNo === 0) {
        mario.gotHit();
    } else if (randNo === 1) {
        mario.gotPowerUp();
    } else if (randNo === 2) {
        mario.addCoin();
    }
}

// 1--------------------------------------------------
// console.log(`\n---NEW GAME---\n\nInitial Status:`);
// mario.print();
// console.log(`\n---START---`);
// genNo();
// mario.print();
// genNo();
// mario.print();
// genNo();
// mario.print();
// console.log(mario.gameActive);

// 1--------------------------------------------------


// 2--------------------------------------------------
let count = 0;

console.log(`\n---NEW GAME---\n\nInitial Status:`);
mario.print();
console.log(`\n---START---`);
while (mario.gameActive !== false && count < 5) {
    count++;
    genNo();
    mario.print();
}

if (mario.gameActive === false && count <= 5) {
    console.log(`Player died!`);
    mario.print();
} else if (mario.gameActive !== false) {
    console.log(`Player SURVIVED!`);
    mario.print();
}

// 2--------------------------------------------------