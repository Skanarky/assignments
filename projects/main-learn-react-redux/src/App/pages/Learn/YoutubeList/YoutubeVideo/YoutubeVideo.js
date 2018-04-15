
import React from "react";
import { Link } from "react-router-dom";

class YoutubeVideo extends React.Component {
    render = () => {
        // console.log(this.props);
        const { id, title, description } = this.props;
        const { url } = this.props.thumbnails.medium;
        const urlYoutube = "https://www.youtube.com/watch?v=";
        const urlVideo = urlYoutube.concat(id)
        return (
            <div className="singleItem">
                <Link to={urlVideo} target="_blank" className="nolineThree"><p>{title}</p></Link>
                <Link to={urlVideo} target="_blank" className="nolineThree"><img src={url} alt={description} /></Link>
            </div>
        )
    }
}

export default YoutubeVideo;