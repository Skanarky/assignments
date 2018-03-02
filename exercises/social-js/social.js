var photographer = {
    name: "Ilian",
    age: 31,
    portfolioWebSite: true,
    camera: [
        {
            make: "Nikon",
            type: "DSLR",
            lenses: [
                {
                    lengthMm: 200,
                    fStop: 2.8
                },
                {
                    lengthMm: 50,
                    fStop: 1.4
                },
                {
                    lengthMm: 20,
                    fStop: 2.0
                }
            ],
            fastFocus: true
        },
        {
            make: "Sony",
            type: "Mirrorless",
            lenses: [{
                    lengthMm: 100,
                    fStop: 1.8
                },
                {
                    lengthMm: 14,
                    fStop: 2.8
                }
            ],
            fastFocus: false
        }
    ],
    flashes: ["red", "white"],
    schedule: [
        {
            customerName: "John",
            typeAssign: "Portrait",
            dayMonthYear: [3, 15, 2018]
        },
        {
            customerName: "Pamela",
            typeAssign: "Budoar",
            dayMonthYear: [3, 10, 2018]
        },
        {
            customerName: "Chris",
            typeAssign: "Landscape",
            dayMonthYear: [4, 30, 2018]
        }
    ],
    photographerFriends: [
        {
            name: "Angela",
            age: 25,
            portfolioWebSite: false,
            camera: [
                {
                    make: "Canon",
                    type: "DSLR",
                    lenses: [
                        {
                            lengthMm: 50,
                            fStop: 1.8
                        },
                        {
                            lengthMm: 10,
                            fStop: 2.2
                        }
                    ],
                    fastFocus: true
                },
                {
                    make: "Canon",
                    type: "Mirrorless",
                    lenses: [
                        {
                            lengthMm: 35,
                            fStop: 1.8
                        },
                        {
                            lengthMm: 14,
                            fStop: 2.4
                        }
                    ],
                    fastFocus: false
                }
            ],
            flashes: [],
            schedule: [
                {
                    customerName: "Dann",
                    typeAssign: "Portraits",
                    dayMonthYear: [3, 14, 2018]
                },
                {
                    customerName: "Tom",
                    typeAssign: "Landscape",
                    dayMonthYear: [3, 5, 2018]
                }
            ],
            photographerFriends: [{}, {}]
        },
        {
            name: "Ivan",
            age: 40,
            portfolioWebSite: true,
            camera: [
                {
                    make: "Nikon",
                    type: "DSLR",
                    lenses: [
                        {
                            lengthMm: 200,
                            fStop: 2.8
                        },
                        {
                            lengthMm: 80,
                            fStop: 1.8
                        },
                        {
                            lengthMm: 35,
                            fStop: 2.0
                        }
                    ],
                    fastFocus: true
                }
            ],
            flashes: ["white"],
            schedule: [
                {
                    customerName: "Mathew",
                    typeAssign: "Kids",
                    dayMonthYear: [3, 19, 2018]
                },
                {
                    customerName: "Alex",
                    typeAssign: "Budoar",
                    dayMonthYear: [3, 28, 2018]
                }
            ],
            photographerFriends: [{}, {}]
        }
    ],

    executeShootPortrait: function () {
        for (var i = 0; i < this.camera.length; i++) {
            if (this.camera[i].lenses[i].lengthMm >= 80) {
                return this.name + " can shoot portraits";
            } else {
                return this.name + " can not shoot portraits";
            }
        }
        
    }
};

console.log(photographer.executeShootPortrait());


// Adding fn to nested obj photoFriends (photographer)

for (var i = 0; i < photographer.photographerFriends.length; i++) {
    photographer.photographerFriends[i].executeShootPortrait = function () {
        for (var i = 0; i < this.camera.length; i++) {
            if (this.camera[i].lenses[i].lengthMm >= 80) {
                return this.name + " can shoot portraits";
            } else {
                return this.name + " can not shoot portraits";
            }
        }
    }
}
console.log(photographer.photographerFriends[0].executeShootPortrait());
console.log(photographer.photographerFriends[1].executeShootPortrait());


// adding 2 items to FLASHES array in object PHOTOGRAPHER

var newFlashes = ["yellow", "orange"];
for (var i = 0; i < newFlashes.length; i++) {
    photographer.flashes.push(newFlashes[i]);
}
console.log(photographer.name + " has flashes with tint colors: " + photographer.flashes);

// adding fn to count future shootings in photographer

photographer.doesItNeedAdvertising = function () {
    if (photographer.portfolioWebSite === true) {
        return photographer.name + " doesn't need advertising!";
    } else {
        return photographer.name + " needs advertising!";
    }
}
console.log(photographer.doesItNeedAdvertising());

// adding fn to count future shootings in photographer

photographer.countShootings = function () {
    return photographer.schedule.length;
}

console.log(photographer.name + " has " + photographer.countShootings() + " scheduled future shootings!");

// Adding prepayment prop = true for Budoar session
photographer.schedule[1].prepayment = true;
console.log(photographer.schedule[1].customerName + " has prepaid for the " + photographer.schedule[1].typeAssign + " session on March " + photographer.schedule[1].dayMonthYear[1]);


// photographer.camera.push(sensor) = "CROP";
photographer.camera[0].sensor = "FULL FORMAT";
console.log(photographer.name + " has a " + photographer.camera[0].sensor + " " + photographer.camera[0].make);



// !!!? Why I couldn't add the fn ExecPortrait directly to the nested photoFriend