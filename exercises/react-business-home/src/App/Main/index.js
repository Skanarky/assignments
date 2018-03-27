import React from "react";

function Main(props) {
    console.log(props);
    const { text, textClass, textLiOne, textLiTwo, textLiThree, textLiClass } = props;
    return (
        <main>
            <div className={textClass}>
                <h1>{text}</h1>
            </div>
            <div className={textLiClass}>
                <p>{textLiOne}</p>
                <p>{textLiTwo}</p>
                <p>{textLiThree}</p>
            </div>
        </main>
    )
}

export default Main;