import React from "react";

// import Header from "./Header/";

// import Content from "./Content/";

// import Footer from "./Footer/";

import Component from "./Component/";

// for I and II
// const friends = [
//     { name: "Mighty Morphin' Power Rangers", age: 24 },
//     { name: "Batman", age: 45 },
//     { name: "Wonder Woman", age: 300 },
//     { name: "Cat Woman", age: 26 },
//     { name: "Superman", age: 30 },
//     { name: "John", age: 21 },
//     { name: "Quasimodo", age: 530 }
// ];

// const friendsShow = friends.map((objectInp, index) =>
//     //II <Component key={objectInp.name + index} human={objectInp}></Component>
//     //we can then filter, etc.

//     //I {/* <div key={objectInp.name + index}>
//     //     <h1>Name: {objectInp.name}</h1>
//     //     <h3>Age: {objectInp.age}</h3>
//     // </div>) */}
// );

// console.log(friendsShow);

function App() {
    return (

        <div>
            <Component></Component>
        </div>

        // {/* <div>
        //     {friendsShow}
        // </div> */}

        // {/* <div className="wrap">
        //     {/* header */}
        //     <Header></Header>
        //     {/* content */}
        //     <Content></Content>
        //     {/* footer */}
        //     <Footer></Footer>
        // </div> */}
    )
}

export default App;