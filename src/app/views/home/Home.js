import LandingArt from "../../../assets/dead_background_website.png";
import GameTitle from "../../../assets/BB website title.png";
import Screenshot1 from "../../../assets/game_screenshot_1.png"
import Screenshot2 from "../../../assets/game_screenshot_2.png"

import "./Home.css";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <img id="landing-art" src={LandingArt} alt="landing art"/>
            <div className="header">
                <img src={GameTitle} alt="game title"/>
            </div>
            <div className="video-player">
                <iframe width="960" height="540" src="https://www.youtube.com/embed/o9WASsEZU_w"
                        id="ytplayer" title="bb-trailer-video" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
            <div className="container landing-content">
                <p className="landing-content__item">
                    B.B. has woken up after a long slumber, and the world is in ruin. Your memory is damaged, but you remember that you were designed with a mission: to deliver this box to humanity’s last survivors. You’re not exactly sure why, but that doesn’t matter right now - you are determined to deliver it to the bunker they’ve taken shelter in. Your box is heavy and weighs you down, but you can throw it to take the weight off your shoulders and improve your mobility. Avoid hazards by strategically positioning you and your box to fulfill your mission!
                </p>
                <div className="container landing-content__images landing-content__item">
                    <img src={Screenshot1} alt="game screenshot 1"/>
                    <img src={Screenshot2} alt="game screenshot 2"/>
                </div>
                <h1> Our Team </h1>
                <p className="landing-content__item">
                    We are Playa, a team of four students studying Computer Science at UC Irvine: Naomi Vuong, Nathan Tang, Ronnie Lucero, and Ryan Hartanto. This game was created for the course CS 113 Computer Game Development. We were inspired by platformers like Celeste.
                </p>
                <p className="landing-content__final-item">
                    <a href="/play">
                        <div id="landing-play-now-button">
                            Play Now
                        </div>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Home