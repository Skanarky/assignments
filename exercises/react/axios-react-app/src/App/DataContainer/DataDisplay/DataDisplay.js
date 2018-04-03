
import React from "react";

import Person from "./Person/Person";
// import PersonNoHair from "./PersonNoHair/PersonNoHair";

const DataDisplay = (props) => {
    console.log(props);
    const { people } = props;
    const personCompAll = people.map((personObj, i) => <Person key={personObj.name + i} {...personObj}></Person>);
    const personCompNoHair = people.filter(personObj => personObj.hair_color === "n/a" || personObj.hair_color === "none").map((personObj, i) => <Person key={personObj.name + i} {...personObj}></Person>);
    const personCompWeightNoHair = people.filter(personObj => personObj.hair_color === "n/a" || personObj.hair_color === "none")
    .sort((personObjOne, personObjTwo) => Number(personObjOne.mass) > Number(personObjTwo.mass))
    .map((personObj, i) => <Person key={personObj.name + i} {...personObj}></Person>);


return (
    <ul>
        <ol>List All:
            {personCompAll}
        </ol>
        <ol>List, With No Hair Only:
            {personCompNoHair}
        </ol>
        <ol>List With No Hair, Sorted By Weight:
            {personCompWeightNoHair}
        </ol>
    </ul>
)
}

export default DataDisplay;