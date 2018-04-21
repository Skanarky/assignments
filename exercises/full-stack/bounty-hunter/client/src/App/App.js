import React from "react";

import Form from "./Form/Form";
import List from "./List/List";

const App = (props) => {
    // console.log(props);
    return (
        <div  className="wrapper">
            <Form></Form>
            <List></List>
            {/* tags and/or comp and/or destructing data + comp HERE */}
        </div>
    )
}

export default App;