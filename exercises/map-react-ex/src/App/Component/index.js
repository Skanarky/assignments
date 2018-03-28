import React from "react";

const friends = [
    { name: "Mighty Morphin' Power Rangers", age: 24 },
    { name: "Batman", age: 45 },
    { name: "Wonder Woman", age: 300 },
    { name: "Cat Woman", age: 26 },
    { name: "Superman", age: 30 },
    { name: "John", age: 21 },
    { name: "Quasimodo", age: 530 }
];

// const friendsShow = friends.map((objectInp, index) =>
//     <div key={objectInp.name + index}>
//         <h1>Name: {objectInp.name}</h1>
//         <h3>Age: {objectInp.age}</h3>
//     </div>
// );

function Component() {
    // console.log(props);
    // const { ...objPerson } = props;
    // console.log(objPerson);

    const friendsShow = friends.map((objectInp, index) =>
    <div key={objectInp.name + index}>
        <h1>Name: {objectInp.name}</h1>
        <h3>Age: {objectInp.age}</h3>
    </div>
    );
    
    return (
        <div>
            {friendsShow}
        </div>
        // {/* <div key="">
        //     <h1>Name: {props.human.name}</h1>
        //     <h3>Age: {props.human.age}</h3>
        // </div> */}
    )
};

export default Component;