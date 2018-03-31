import React from "react";
import Friend from "./Friend";
import friends from "./data.js";

const FriendsList = () =>
    <div>
        {friends.map((person, i) => <Friend key={person.name + i} human={person} index={i} />)}
    </div>

export default FriendsList;