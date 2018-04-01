
import React from "react";

const List = (props) =>
    <li>
        {/* names */}
        <h4>{props.nameF.charAt(0).toUpperCase().concat(props.nameF.substr(1))} {props.nameL.charAt(0).toUpperCase().concat(props.nameL.substr(1))}</h4>

        {/* tags and/or comp and/or destructing data + comp HERE */}
    </li>

export default List;