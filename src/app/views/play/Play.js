import LandingArt from "../../../assets/dead_background_website.png";
import {Link} from "react-router-dom";
import DownloadIcon from "../../../assets/download-icon.svg";

import "./Play.css"


function Play() {
    return (
        <div>
            <div className="video-player">
                <iframe id="game" title="bb-game" width="960" height="540"
                        src="bb_webgl/index.html"
                        frameBorder="0"/>
            </div>
            <div className="container landing-content play-page">
                <div className="landing-content__item">
                    <h1><b>Controls</b></h1>
                    Left and Right Arrow Keys - Move
                    <br/>
                    C - Jump
                    <br/>
                    X - Magnetize or Throw Package
                </div>
                <div className="landing-content__item">
                    <h1><b>Download Instructions</b></h1>
                    <a href="B.B.'s Delivery Service.zip" download>
                        <div className="download-button">
                            Download Zip File <img src={DownloadIcon} alt="download"/>
                        </div>
                    </a>
                    1. Download the zip file
                    <br/>
                    2. Unzip the file
                    <br/>
                    Run the .exe file to play!
                </div>
                <div className="landing-content__item">
                    <h1><b>Sources</b></h1>
                    <b> Dialogue: </b> Unity Asset
                    <br/>
                    <b> Music: </b> Abandoned by 1finity
                </div>
            </div>
        </div>
    )
}

export default Play;