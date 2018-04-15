import React from "react";

import Video from "./Video/Video";

const Home = (props) => {
    return (
        <section className="home-wrap">
            <Video></Video>
            <div>
                <h2>Welcome,</h2>
                <h1>Let's Learn Today</h1>
            </div>
        </section>
    )
}

export default Home;