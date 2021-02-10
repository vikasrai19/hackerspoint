import React from "react";
import "../style/home.css";
import Hacker from "../assets/Hacker.png";
import TrendingPosts from "../components/TrendingPosts";
import firebase from "firebase";

function Home(){

    firebase.analytics().logEvent('Home Page');

    return(
       <div className="home-container" id="home-container">
           <GetStarted />
           <TrendingPosts />
       </div>
    );
}


function GetStarted(){
    return(
        <div className="landing-section" id="landing-section">
            <div className="landing-main-section" >
                <div className="landing-title" id="landing-title">
                    <h1 className="title">Hackers Point</h1>
                    <p className="tag">Lets Start Hacking!</p>
                    <button className="get-started" id="get-started" onClick={() => {
                        window.scrollTo(0, window.innerHeight);
                    }} >Get Started</button>
                </div>
                <div className="landing-logo" id="landing-logo">
                    <img src={Hacker} alt="" className="logo" />
                </div>
            </div>
        </div>
    );
}

export default Home;
